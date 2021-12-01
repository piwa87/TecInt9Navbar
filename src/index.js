import React from 'react'
import ReactDOM from 'react-dom'
import Parse from "parse"
import App from './App'
import './index.css'

// In order to make your life easier, the keys are hardcoded here, but we do use the .env files as suggested.
Parse.initialize("y1pkFZswJRDe8jhue98PGNh4mxxu5geUNCvNKXK1", "HrNmgVEuGQ8macNhM9BbXfkORi4wJOr5HFFks8O6");

// Parse.initialize(process.env.REACT_APP_API_KEY, process.env.REACT_APP_JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
