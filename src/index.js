import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Login/Register'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './sass/index.scss'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/user" element={<Login />}>
             <Route path="sign-in" element={<Login />}>
             <Route path="sign-up" element={<Register />}></Route>
          </Route>

             
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

