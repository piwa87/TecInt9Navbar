import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react'
import './Navbar.css'

export default function Navbar({ user }) {

    const isLoggedIn = (!user ? false : true);

    return (
        <nav className="navbar">
            {
                !isLoggedIn ? (
                    <a href="/home"> </a>
                ) : (user === "par") ? (                     // Navbar for participants:
                    <>
                        <Icon
                            className="nav-icon"
                            icon="healthicons:travel"
                            color="#555"
                            width="50"
                            height="50"
                        />
                        <NavLink to="/excursions">Join Excursion</NavLink>
                        <NavLink to="/transport">Find transport</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/signup">Sign up</NavLink>
                        <a href="/home">Home</a>
                    </>
                ) : (user === "org") && (                    // Navbar for organizers:
                    <>
                        <Icon
                            className="nav-icon"
                            icon="clarity:administrator-solid"
                            color="#555"
                            width="50"
                            height="50"
                        />
                        <NavLink to="/createExcursion">Create Excursion</NavLink>
                        <NavLink to="/participantList">Participant List</NavLink>
                        <NavLink to="/dutyList">Duty List</NavLink>
                        <NavLink to="/shoppingList">Shopping List</NavLink>
                        <a className="nav--logout" href="/home">Home</a>
                    </>
                )
            }
        </nav>
    )
}