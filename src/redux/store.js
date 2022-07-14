import { configureStore } from '@reduxjs/toolkit'
import authReducer from '~/features/Auth/authSlice'
import cartReducer from '~/features/Cart/CartSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
})