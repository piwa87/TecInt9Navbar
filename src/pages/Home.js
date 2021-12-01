import Parse from "parse"
import { useNavigate } from "react-router"
import { GreenButton } from "../components/Button"

export default function Home(props) {

 
    const navigate = useNavigate()

    function logInOrganizer(e) {
        e.preventDefault()
        const user = new Parse.User()
        user.setUsername("org")
        user.setPassword("1234")
        user.logIn().then(
            navigate("/createexcursion"),
            window.location.reload(),
            console.log("User: '" + user.getUsername() + "' logged on successfully")
        ).catch((error) => { console.error(error); })
    }

    function logInParticipant() {
        const user = new Parse.User()
        user.setUsername("par")
        user.setPassword("1234")
        user.logIn().then(
            navigate("/excursions"),
            window.location.reload(),
            console.log("User: '" + user.getUsername() + "' logged on successfully")
        ).catch((error) => { console.error(error); })
    }

    return (
        <div>
            <h3>Welcome to the annual excursion planner.</h3>
            <h3>Choose to sign in as:</h3>
            <br />
            <GreenButton onClick={logInOrganizer}>Organizer</GreenButton>
            <GreenButton onClick={logInParticipant}>Participant</GreenButton>
            <br />
            <br />
            <br />
            <code>{"#!%€%&/&##!!!€#"}</code>
            <br />
            <code>For some reason the Parse.User is not working now. 
                I think something broke on the Parse server with session logging and such. 
                These two butons managed to switch user and then refresh the page, which rendered a different menu.
                Fixing this is the next step.</code>
            <br />
            <code>As a workaround now the menu renders as the "org" user, and it's possible to switch the user with the 2 small buttons.</code>

        </div>
    )
}