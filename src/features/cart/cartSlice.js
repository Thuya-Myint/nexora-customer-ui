import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // console.log("item", newItem)
      const existingItem = state.items.find(
        (item) => item.skuId === newItem.skuId
      );

      if (existingItem) {
        const stockExceeds = existingItem.quantity + newItem.quantity > newItem.stock
        if (stockExceeds) {
          const availableQty = newItem.stock - existingItem.quantity
          return alert(`only ${newItem.stock} in stock! You can add ${availableQty} more item!`)
        }
        existingItem.quantity += newItem.quantity
      } else {
        state.items.push(newItem)
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },
    updateQuantity: (state, action) => {
      const { id, quantity, stock } = action.payload
      console.log("::", id, quantity, stock)
      const item = state.items.find(
        (item) => item.id === id
      )
      if (!item) return;

      if (quantity > stock) {

        return alert(`Only ${stock} in stock!`)
      }

      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== id
        )
        return;
      }

      item.quantity = quantity
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer