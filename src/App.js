import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

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
		<BrowserRouter>
			<Navbar />
			<section className="main-window">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/excursions" element={<Excursions />} />
					<Route path="/createexcursion" element={<CreateExcursion />} />
					<Route path="/transport" element={<Transport />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/participantList" element={<ParticipantList />} />
					<Route path="/dutyList" element={<DutyList />} />
					<Route path="/shoppingList" element={<ShoppingList />} />
				</Routes>
			</section>
		</BrowserRouter>
	)
}