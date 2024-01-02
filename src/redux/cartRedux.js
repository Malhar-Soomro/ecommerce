import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantity: 0,
        total: 0,
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            state.products.push(action.payload);
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;