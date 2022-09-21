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
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignIn from './features/Auth/pages/SignIn';
import ForgotPassword from './features/Auth/pages/ForgotPassword';
import SignUp from './features/Auth/pages/SignUp';
import ActivationEmail from './features/Auth/pages/ActivationEmail';
import Admin from './features/Admin/pages';
import Product from "./features/Product/page";
import DetailProduct from "./features/DetailProduct/page";
import Cart from "./features/Cart/page";
import DashBoard from "./features/Admin/components/DashBoard"
import ShowProducts from "./features/Admin/components/ManageProduct/ShowProducts"
import EditProduct from './features/Admin/components/ManageProduct/EditProduct';
import ManageUser from "./features/Admin/components/ManageUser"
import HomePage from './features/HomePage/pages';
import Profile from './features/Profile'

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider 
    clientId="86586470178-ng16g3jm7ncpo2tvq6m3bdojmnetns84.apps.googleusercontent.com">

    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="auth/sign-in" element={<SignIn />}></Route>
            <Route path="auth/sign-in/sign-up" element={<SignUp />}></Route>
            <Route
              path="auth/sign-in/forgot-password"
              element={<ForgotPassword />}
            ></Route>
            <Route
              path="auth/activate/:activation_token"
              element={<ActivationEmail />}
            ></Route>

            <Route path="/" element={<App />}>
            <Route path="profile" element={<Profile />}></Route>
              <Route index element={<HomePage />}></Route>
              <Route path="product/:slug" element={<Product />}>
              </Route>
              <Route path="product/:slug/:id" element={<DetailProduct />}></Route>
              <Route path="product/cart" element={<Cart />}></Route>
            </Route>
            <Route path="admin" element={<Admin />}>
              <Route path='dashboard' element={<DashBoard />}></Route>
              <Route path="products" element={<ShowProducts />}>
              <Route path=":id" element={<EditProduct />}></Route>
              </Route>
              <Route path="users" element={<ManageUser />}></Route>
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
    </GoogleOAuthProvider>;

  </React.StrictMode>,
  document.getElementById("root")
);

