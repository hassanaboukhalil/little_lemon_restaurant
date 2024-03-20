import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn : localStorage.getItem('isLoggedIn') == 'true' ?  true : false
    },
    reducers: {
        login: state => {
            localStorage.setItem('isLoggedIn',true)
            state.isLoggedIn = true;
        },
        logout: state => {
            localStorage.setItem('isLoggedIn',false)
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer;