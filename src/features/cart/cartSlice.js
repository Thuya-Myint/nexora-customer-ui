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

          console.log("existingItemQty", existingItem.quantity)
          console.log("item qty to be added", newItem.quantity)
          console.log("-------")
          console.log("item available to purchase", newItem.stock)


          const availableQty = newItem.stock - existingItem.quantity
          // const alertQtyCount = newItem.stock - newItem.quantity <= 0 ? 0 : newItem.stock - newItem.quantity

          return alert(`only ${newItem.stock} in stock! You can add ${availableQty} more item!`)
        }
        // console.log(`${existingItem.quantity + newItem.quantity}: ${newItem.stock}`)
        // console.log("item exists")
        existingItem.quantity += newItem.quantity
      } else {
        // console.log("new item ")
        state.items.push(newItem)
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find(
        (item) => item.id === id
      )
      if (!item) return;

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