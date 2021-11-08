import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <li><Link to="/excursions">Excursion</Link></li>
            <li><Link to="/transport">Transportation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
        </div>
    )
}

export default Navbar