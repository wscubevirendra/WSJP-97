const orderModel = require('../model/order.model');
const cartModel = require('../model/cart.model');
const Razorpay = require('razorpay');
const { successResponse, errorResponse, serverErrorResponse, createdResponse, updatedResponse } = require('../utility/response');
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const crypto = require('crypto')
const order = {
    async orderPlace(req, res) {
        try {
            const { user_id, order_total, payment_mode, shipping_details } = req.body

            const cart = await cartModel.find({ user_id })
                .populate("product_id", "finalPrice _id");
            console.log(cart)
            const productDetails = cart.map((item) => {
                return (
                    {
                        product_id: item.product_id._id,
                        qty: item.qty,
                        price: item.product_id.finalPrice,
                        total: (item.product_id.finalPrice * item.qty)
                    }
                )
            })

            const order = await orderModel.create(
                {
                    user_id: user_id,
                    product_details: productDetails,
                    order_total: order_total,
                    payment_mode: payment_mode,
                    order_status: 0,
                    shipping_details: shipping_details
                }
            )

            if (payment_mode == 0) {
                await cartModel.deleteMany({ user_id: user_id })
                await order.save();
                res.status(201).json(
                    {
                        success: true,
                        status: 'success',
                        message: "order place",
                        order_id: order._id
                    }
                )

            } else {
                var options = {
                    amount: order_total * 100,
                    currency: "INR",
                    receipt: order._id
                };
                instance.orders.create(options, async function (err, Razorpayorder) {
                    if (err) {
                        return errorResponse(res, "server order not create")
                    } else {
                        order.razorpay_order_id = Razorpayorder.id
                        await order.save();
                        res.status(201).json(
                            {
                                success: true,
                                status: 'success',
                                message: "order place",
                                order_id: order._id,
                                razorpay_order_id: Razorpayorder.id
                            }
                        )



                    }
                });

            }


        } catch (error) {
            return serverErrorResponse(res, error.message || "Internal server error");

        }

    },
    async orderSuccess(req, res) {
        try {
            console.log(req.body)
            const { order_id, user_id, razorpay_response } = req.body;
            const order = await orderModel.findById(order_id);
            console.log(order, " order success body");
            if (!order) {
                return res.send({ msg: "Order not found", status: 'error' });
            }
            // const user = await UserModel.findById(user_id);
            // if (!user) {
            //     return res.send({ msg: "User not found", status: 'error' });
            // }
            // Check if the order is already paid
            if (order.payment_status == 1) {
                return res.send({ msg: "Order already paid", status: 'error' });
            }
            // Verify the payment

            const generated_signature =
                crypto
                    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                    .update(razorpay_response.razorpay_order_id + "|" + razorpay_response.razorpay_payment_id)
                    .digest("hex");
            console.log(generated_signature);
            console.log(razorpay_response.razorpay_signature);
            if (generated_signature !== razorpay_response.razorpay_signature) {
                return res.send({ msg: "Payment verification failed", status: 'error' });
            }
            // Update order status to paid
            order.payment_status = 1;
            order.order_status = 1;
            order.razorpay_payment_id = razorpay_response.razorpay_payment_id;
            await order.save();
            await cartModel.deleteMany({ user_id });
            res.send({ message: "Order placed succesfully", status: 'success', order_id: order._id });
        } catch (error) {
            console.error("Error in order success:", error.message);
            return errorResponse(res)
        }
    },
    async getOrder(req, res) {
        try {
            console.log(req)
            const id = req.params.id;
            let order = null;
            if (id) {
                order = await orderModel.findById(id);
            } else {
                order = await orderModel.find();
            }
            if (!order) noContentResponse(res);
            return successResponse(res, "order find", order)
        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    }

}

module.exports = order