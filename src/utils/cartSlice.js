import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.card.info.id === item.card.info.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.card.info.id !== itemId);
        },
        increaseItem: (state, action) => {
            const item = state.items.find(i => i.card.info.id === action.payload);
            if (item) item.quantity++;
        },
        decreaseItem: (state, action) => {
            const item = state.items.find(i => i.card.info.id === action.payload);
            if (item) {
                item.quantity--;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.card.info.id !== action.payload);
                }
            }
        },
        clearCart: (state, action) => {
            state.items = [];
        },
    },
});
export const { addItem, removeItem, clearCart, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;