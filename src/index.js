import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Parse from "parse"

Parse.initialize(process.env.REACT_APP_API_KEY, process.env.REACT_APP_JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  )
  