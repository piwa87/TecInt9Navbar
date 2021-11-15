import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            user: "participant"    // For the displayed menu items depend on this 'user' state.
        }
    }

    render() {

        if (this.state.user == "none") {
            return (<div className="Navbar">
                <Link to="/">Start</Link>
            </div>)
        } else if (this.state.user == "participant") {
            return (
                <div className="Navbar">
                    <Link to="/excursions">Excursion</Link>
                    <Link to="/transport">Transportation</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/">Start</Link>
                </div>
            )
        } else if (this.state.user == "organizer") {
            return (
                <div className="Navbar">
                    <Link to="/excursions">Excursion</Link>
                    <Link to="/participantList">Participant List</Link>
                    <Link to="/dutyList">Duty List</Link>
                    <Link to="/shoppingList">Shopping List</Link>
                    <Link to="/">Start</Link>
                </div>
            )
        }
    }
}
export default Navbar