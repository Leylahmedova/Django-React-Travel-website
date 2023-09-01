import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Reducer from './store/Reducer'
import {legacy_createStore} from "redux"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
const data=legacy_createStore(Reducer)
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={data}>
 <BrowserRouter>
    <App />
 </BrowserRouter>
 </Provider>
)
