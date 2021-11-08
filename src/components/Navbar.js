import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/excursions">Excursion</Link>
            <Link to="/transport">Transportation</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Sign up</Link>
        </div>
    )
}

export default Navbar