import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import userSlice from './features/userSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice
    },
})

export default store