const CartModel = require('../model/cart.model');

const { serverErrorResponse } = require('../utility/response')

const cart = {
    async dbtoCart(req, res) {
        try {
            const { cart, userId } = req.body
            const allPromise = cart.map(
                async (item) => {
                    const { productId, qty } = item
                    const existingItem = await CartModel.findOne({ user_id: userId, product_id: productId })


                    if (existingItem) {

                        //Update qty
                        existingItem.qty += Number(qty);
                        await existingItem.save();
                    } else {
                        //new insert
                        const cart = await CartModel.create({
                            user_id: userId,
                            product_id: productId,
                            qty: qty
                        })
                        await cart.save();

                    }

                })

            await Promise.all(allPromise)
            return res.status(200).json({
                success: true,
                message: "Cart updated successfully",
                cart: await CartModel.find({ user_id: userId }).populate('product_id')
            });


        } catch (error) {
            console.log(error)
            return serverErrorResponse(res)
        }

    },
    async addcart(req, res) {
        try {
            const { productId, userId } = req.body
            const existingItem = await CartModel.findOne({ user_id: userId, product_id: productId })


            if (existingItem) {
                existingItem.qty += Number(qty);
                await existingItem.save();
            } else {
                const cart = await CartModel.create({
                    user_id: userId,
                    product_id: productId,
                    qty: qty
                })
                await cart.save();
            }

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res)
        }

    }
}

module.exports = cart