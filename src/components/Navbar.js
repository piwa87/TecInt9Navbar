import Parse from "parse"
import { useState } from "react"
import Cat from "../images/cat.jpg"

export default function Navbar() {

    const [currentUser] = useState(Parse.User.current().getUsername())

    console.log("Current:" + currentUser)

    
    return (
        <div className="navbar">

            {!currentUser && (
                <>
                    <a href="/Home"><img alt="" src={Cat} width="10%" />    </a>
                </>
            )}
            {(currentUser === "par") && (
                <>
                    <a href="/excursions">Excursion</a>
                    <a href="/transport">Transportation</a>
                    <a href="/contact">Contact</a>
                    <a href="/signup">Sign up</a>
                    <a href="/Home">Log Out</a>
                </>
            )}
            {(currentUser === "org") && (
                <>
                    <a href="/excursions">Excursion</a>
                    <a href="/participantList">Participant List</a>
                    <a href="/dutyList">Duty List</a>
                    <a href="/shoppingList">Shopping List</a>
                    <a href="/Home">Log Out</a>
                </>
            )}
        </div>

    )
}
