import Parse from "parse";
import { useState } from "react"

export default function Navbar() {

    const isLoggedIn = true;

    // Sorry, but this time we need to ask you to manually swtich 'user' between:
    // "org" = menu for the organizers
    // "par" = menu for the participants

    // const user = "org";
    const [user, setUser] = useState("org")
    
    // This here worked fine a couple of days ago, but now it returns empty object #!€%!&%#€€%!#!
    const userFromServer = Parse.User.current()
    console.log("Parsed user from server: " + userFromServer);

    return (
        <nav className="navbar">
            
            {
                !isLoggedIn ? (
                    <>
                    </>
                ) : (user === "par") ? (                     // Navbar for participants:
                    <>
                        <a href="/excursions">Join Excursion</a>
                        <a href="/transport">Find transport</a>
                        <a href="/contact">Contact</a>
                        <a href="/signup">Sign up</a>
                    </>
                ) : (user === "org") && (                    // Navbar for organizers:
                    <>
                        <a href="/createExcursion">Create Excursion</a>
                        <a href="/participantList">Participant List</a>
                        <a href="/dutyList">Duty List</a>
                        <a href="/shoppingList">Shopping List</a>
                    </>
                )  
            }
            <a className="logout--button" href="/home">Log Out</a>
            <button className="tmpButton" onClick={()=>setUser("org")}>O</button>
            <button className="tmpButton" onClick={()=>setUser("par")}>P</button>
        </nav>
    )
}