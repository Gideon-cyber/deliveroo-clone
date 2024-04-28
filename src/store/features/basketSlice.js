import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors
export const selectBasket = (state) => state.basket;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = createSelector(
  [(state) => state.basket.items, (state, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const selectBasketTotal = createSelector([selectBasketItems], (item) =>
  item.reduce((total, item) => total + item.price, 0)
);

export default basketSlice.reducer;
