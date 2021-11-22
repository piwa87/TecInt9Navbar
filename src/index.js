import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Parse from "parse"

// Parse.initialize(process.env.REACT_APP_API_KEY, process.env.REACT_APP_JS_KEY);
Parse.initialize(
  "y1pkFZswJRDe8jhue98PGNh4mxxu5geUNCvNKXK1",
  "HrNmgVEuGQ8macNhM9BbXfkORi4wJOr5HFFks8O6")
Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
