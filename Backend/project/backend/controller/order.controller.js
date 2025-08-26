const orderModel = require('../model/order.model');
const cartModel = require('../model/cart.model');
const { successResponse, errorResponse, serverErrorResponse, createdResponse, updatedResponse } = require('../utility/response');
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
                //Online

            }


        } catch (error) {
            return serverErrorResponse(res, error.message || "Internal server error");

        }

    }
}

module.exports = order