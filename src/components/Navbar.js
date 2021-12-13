import { NavLink } from "react-router-dom";

export default function Navbar(props) {

    const isLoggedIn = (!props.user ? false : true);
    const user = props.user

    return (
        <nav className="navbar">
            {
                !isLoggedIn ? (
                    <a className="logout--button" href="/home"> </a>
                ) : (user === "par") ? (                     // Navbar for participants:
                    <>
                        <NavLink to="/excursions">Join Excursion</NavLink>
                        <NavLink to="/transport">Find transport</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/signup">Sign up</NavLink>
                        <a href="/home">Home</a>
                    </>
                ) : (user === "org") && (                    // Navbar for organizers:
                    <>
                        <NavLink to="/createExcursion">Create Excursion</NavLink>
                        <NavLink to="/participantList">Participant List</NavLink>
                        <NavLink to="/dutyList">Duty List</NavLink>
                        <NavLink to="/shoppingList">Shopping List</NavLink>
                        <a href="/home">Home</a>
                    </>
                )
            }
        </nav>
    )
}