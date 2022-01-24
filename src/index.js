import React from 'react'
import ReactDOM from 'react-dom'
import Parse from "parse"
import App from './App'
import './index.css'

// In order to make your life easier, the keys are hardcoded here, but we do use the .env files as suggested.
// These are the codes for original APP, which needs a reset:
// Parse.initialize("y1pkFZswJRDe8jhue98PGNh4mxxu5geUNCvNKXK1", "HrNmgVEuGQ8macNhM9BbXfkORi4wJOr5HFFks8O6");

// Alternative server:
Parse.initialize("mDBjX2yw6jZOqBzaD7dtM8AtxbUdLcJFqUY9XBxL", "2P3cwrXiKTTZLxzNze2gAkxZ5ya5LPhFK01Lc2EM");


// New server after exam:
// Parse.initialize("dhoOTyRY0dgcKRHSKi8Qz5WEAUfhk6vulrzpqXfX","69YlJUF6XADsX89GVxFpl2ggI15UUNGOIhgTnDjT");

// Parse.initialize(process.env.REACT_APP_API_KEY, process.env.REACT_APP_JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
