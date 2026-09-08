import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload); // push lägger till ett nytt objekt i items-arrayen som .Add() i C#.
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;