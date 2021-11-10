import React from "react"
import "../App.css"
import { Link } from "react-router-dom"


function Home() {
    return (
        <div className="General">
            <h1>Choose to sign in as</h1>
            <Link to="/excursions">Participant</Link>
            <Link to="/excursions">Organizer</Link>
        </div>
    )
}

export default Home