import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./assets/sass/index.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import SignIn from './features/Auth/pages/SignIn';
import SignUp from './features/Auth/pages/SignUp';
import Admin from './features/Admin/pages'
import Product from "./features/Product/page";
import DetailProduct from "./features/DetailProduct/page";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="user/sign-in" element={<SignIn />}></Route>
          <Route path="user/sign-in/sign-up" element={<SignUp />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:id" element={<DetailProduct />}></Route>
          
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

