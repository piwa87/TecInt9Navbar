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
import AfterSignUp from './pages/AfterSignUp'
import { useState } from 'react'

export default function App() {

	const [user, setUser] = useState(null)
	console.log("App rendered. User: " + user);

	return (
		<>
			<BrowserRouter>
				<Navbar user={user} />
				<section className="main">
					<Routes>
						<Route path="/" element={<Home setUser={setUser} />} />
						<Route path="/home" element={<Home setUser={setUser} />} />
						
						<Route path="/createExcursion" element={<CreateExcursion setUser={() => setUser("org")} />} />
						<Route path="/participantList" element={<ParticipantList />} />
						<Route path="/dutyList" element={<DutyList />} />
						<Route path="/shoppingList" element={<ShoppingList />} />	
						
						<Route path="/excursions" element={<Excursions setUser={() => setUser("par")} />} />
						<Route path="/transport" element={<Transport />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/signup" element={<Signup />} />

						<Route path="/afterSignUp" element={<AfterSignUp />} />
					</Routes>
				</section>
			</BrowserRouter>
		</>
	)
}