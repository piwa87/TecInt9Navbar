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
            navigate("/home"),
            window.location.reload(),
            console.log("User: '" + user.getUsername() + "' logged on successfully")
        ).catch((error) => { console.error(error); })
    }

    function logInParticipant() {
        const user = new Parse.User()
        user.setUsername("par")
        user.setPassword("1234")
        user.logIn().then(
            navigate("/home"),
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
                Since it broke, we almost broke our necks on this.</code>
            <br />
            <code>To get the effect please change the 'user' variable between "par" and "org" in order to see the different menus, which ten will take you to the right pages.</code>

        </div>
    )
}