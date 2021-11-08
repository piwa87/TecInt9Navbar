import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar(props) {

    const visionMode = 1

    if (visionMode === 1) {
        return (
                
            <div className="Navbar">
                <Link to="/excursions">Excursion</Link>
                <Link to="/transport">Transportation</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/">Start</Link>
            </div>
        )
    } else if (props.mode === 2) {
        return (
            <div className="Navbar">
                <Link to="/excursions">Excursions</Link>
                <Link to="/participantList">Participant List</Link>
                <Link to="/dutyList">Duty List</Link>
                <Link to="/shoppingList">Shopping List</Link>
                <Link to="/">Start</Link>
            </div>
        )
    } else {
        return (
            <div className="Navbar">
                <Link to="/">Start</Link>
            </div>
        )
    }


}

export default Navbar