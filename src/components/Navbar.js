import Parse from "parse"
import Cat from "../Images/cat.jpg"

export default function Navbar() {

    let currentUser = ""
    // currentUser = "par"
    currentUser = Parse.User.current().getUsername();
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const currentUser = Parse.User.current().getUsername()
    console.log("Current user: " + currentUser);

    isLoggedIn ? (console.log("Logged in!")) : console.log("Not logged in!");;

    return (
        <nav className="navbar">
            {
                !isLoggedIn ? (
                    <a href="/Home"><img alt="" src={Cat} width="10%" />    </a>

                ) : (currentUser === "par") ? (                     // PARTICIPANTS:
                    <>
                        <a href="/excursions">Excursions</a>
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
            <a className="logout--button" href="/Home">Log Out</a>
        </nav>

    )
}

