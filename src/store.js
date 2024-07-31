// src/store.js

import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from @reduxjs/toolkit
import cartReducer from './CartSlice'; // Import the cartReducer from CartSlice.jsx

const store = configureStore({
  reducer: {
    cart: cartReducer, // Associate the cartReducer with the 'cart' key
  },
});

export default store; // Export the configured store
