import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    loginAt: null,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.data = payload.data;
            state.token = payload.token;
            state.loginAt = Date.now()
            localStorage.setItem("user", JSON.stringify(state.data))
            localStorage.setItem("token", state.token)
            localStorage.setItem("loginAt", state.loginAt)
        },
        lstoUser: (state) => {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = localStorage.getItem("token");
            const loginAt = localStorage.getItem('loginAt');
            if (user && token) {
                state.data = user
                state.token = token
                state.loginAt = loginAt
            }
        }, logoutHandler: (state) => {
            localStorage.clear();
            state.data = null
            state.token = null
            state.loginAt = null

        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, lstoUser, logoutHandler } = userSlice.actions

export default userSlice.reducer