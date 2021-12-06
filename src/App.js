import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// Importing Navbar component:
import Navbar from "./components/Navbar"

// Importing pages from the Navbar menu:
import Home from "./pages/Home"
import Excursions from './pages/Excursions'
import Transport from './pages/FindTransport'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import ParticipantList from './pages/ParticipantList'
import DutyList from './pages/DutyList'
import ShoppingList from './pages/ShoppingList'
import CreateExcursion from './pages/CreateExcursion'

export default function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<section className="main">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/excursions" element={<Excursions />} />
						<Route exact path="/createexcursion" element={<CreateExcursion />} />
						<Route exact path="/transport" element={<Transport />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/signup" element={<Signup />} />
						<Route exact path="/participantList" element={<ParticipantList />} />
						<Route exact path="/dutyList" element={<DutyList />} />
						<Route exact path="/shoppingList" element={<ShoppingList />} />
					</Routes>
				</section>
			</BrowserRouter>
		</>
	)
}