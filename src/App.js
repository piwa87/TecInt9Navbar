import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Home from "./pages"
import Navbar from "./components/Navbar"
import Contact from './pages/contact'
import Excursions from './pages/excursions'
import Signup from './pages/signup'
import Transport from './pages/transport'

// import MainWindow from './components/MainWindow';

function App() {

	return (

		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/excursions" exact component={Excursions}/>
				<Route path="/transport" exact component={Transport}/>
				<Route path="/contact" exact component={Contact}/>
				<Route path="/signup" exact component={Signup}/>
			</Switch>

		</Router>

	)
}

export default App;

