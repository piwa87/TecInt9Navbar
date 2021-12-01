import Parse from "parse";

export default function Navbar() {

    const isLoggedIn = true;

    
    // Sorry, but this time we need to ask you to manually swtich 'user' between:
    // "org" = menu for the organizers
    // "par" = menu for the participants

    const user = "org";     
    

    // This here worked fine a couple of days ago, but now it returns empty object #!€%!&%#€€%!#!
    const userFromServer = Parse.User.current()
    console.log(userFromServer);

    return (
        <nav className="navbar">
            {
                !isLoggedIn ? (
                    <>
                    </>
                ) : (user === "par") ? (                     // PARTICIPANTS:
                    <>
                        <a href="/excursions">Join Excursion</a>
                        <a href="/transport">Find transport</a>
                        <a href="/contact">Contact</a>
                        <a href="/signup">Sign up</a>
                    </>
                ) : (user === "org") && (                    // ORGANIZERS:
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

