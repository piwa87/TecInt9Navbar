import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Importing Navbar component:
import Navbar from "./components/Navbar"

// Importing pages from the Navbar menu:
import Home from "./pages"
import Excursions from './pages/excursions'
import Transport from './pages/transport'
import Contact from './pages/contact'
import Signup from './pages/signup'
import ParticipantList from './pages/participantList'
import DutyList from './pages/dutyList'
import ShoppingList from './pages/shoppingList'

function App() {

	return (

		<Router>
			<Navbar mode="2"/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/excursions" exact component={Excursions} />
				<Route path="/transport" exact component={Transport} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/participantList" exact component={ParticipantList} />
				<Route path="/dutyList" exact component={DutyList} />
				<Route path="/shoppingList" exact component={ShoppingList} />
			</Switch>

		</Router>

	)
}

export default App;
