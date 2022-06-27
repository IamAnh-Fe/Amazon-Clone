import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
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
          <Route path="user/sign-in" element={<SignIn/>}></Route>
          <Route path="user/sign-in/sign-up" element={<SignUp />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

