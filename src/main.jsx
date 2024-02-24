import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import Reducer from './store/Reducer.js'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
const store=legacy_createStore(Reducer)
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><Router><App /></Router></Provider>)
