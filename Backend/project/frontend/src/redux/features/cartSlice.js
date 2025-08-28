import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    original_total: 0,
    final_total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, { payload }) => {
            const existingItem = state.cart.find((cd) => cd.productId === payload.productId)
            if (existingItem) {
                existingItem.qty += 1
            } else {
                state.cart.push({ productId: payload.productId, qty: 1 })

            }
            state.original_total += payload.original_price
            state.final_total += payload.final_price
            localStorage.setItem("cart", JSON.stringify(state))
        },
        emptyCart: (state) => {
            state.cart = null
            state.original_total = 0
            state.final_total = 0
            localStorage.removeItem("cart")
            console.log("Done-CART")
        },
        lstoCart: (state) => {
            const data = JSON.parse(localStorage.getItem('cart'))
            if (data) {
                state.cart = data.cart
                state.original_total = data.original_total
                state.final_total = data.final_total
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { addtoCart, lstoCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer