import Parse from "parse"
import Cat from "../images/cat.jpg"

export default function Navbar() {

    const isLoggedIn = true
    const currentUser = Parse.User.current().getUsername()

    console.log("Current user: " + currentUser);

    return (
        <nav className="navbar">
            {
                !isLoggedIn ? (
                    <img alt="" src={Cat} width="50px" />

                ) : (currentUser === "par") ? (                     // PARTICIPANTS:
                    <>
                        <a href="/excursions">Join Excursion</a>
                        <a href="/transport">Find transport</a>
                        <a href="/contact">Contact</a>
                        <a href="/signup">Sign up</a>
                    </>
                ) : (currentUser === "org") && (                    // ORGANIZERS:
                    <>
                        <a href="/createExcursion">Create Excursion</a>
                        <a href="/participantList">Participant List</a>
                        <a href="/dutyList">Duty List</a>
                        <a href="/shoppingList">Shopping List</a>
                    </>
                )
            }
            <a className="logout--button" href="/home">Log Out</a>
        </nav>

    )
}

