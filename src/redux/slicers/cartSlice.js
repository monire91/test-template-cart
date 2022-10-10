import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list:[],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart(state, action) {
            state.list = action.payload
        }
    },
})

export const {updateCart} = cartSlice.actions
export default cartSlice.reducer
