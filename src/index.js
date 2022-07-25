import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./assets/sass/index.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import SignIn from './features/Auth/pages/SignIn';
import ForgotPassword from './features/Auth/pages/ForgotPassword';
import SignUp from './features/Auth/pages/SignUp';
import Admin from './features/Admin/pages';
import Product from "./features/Product/page";
import DetailProduct from "./features/DetailProduct/page";
import Cart from "./features/Cart/page";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="user/sign-in" element={<SignIn />}></Route>
            <Route path="user/sign-in/sign-up" element={<SignUp />}></Route>
            <Route path="user/sign-in/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/" element={<App />}>
              <Route path="admin" element={<Admin />}></Route>
              <Route path="product" element={<Product />}></Route>
              <Route path="product/:id" element={<DetailProduct />}></Route>
              <Route path="product/cart" element={<Cart />}></Route>
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

