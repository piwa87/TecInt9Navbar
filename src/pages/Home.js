import Parse from "parse"
import { useNavigate } from "react-router"
import { GreenButton } from "../components/Button"

export default function Home() {

    const navigate = useNavigate()

    function logInOrganizer(e) {
        e.preventDefault()
        const user = new Parse.User()
        user.setUsername("org")
        user.setPassword("1234")
        user.logIn().then(
            navigate("/home"),
            window.location.reload()
        ).catch((error) => {console.error(error);})
    }

    function logInParticipant() {
        const user = new Parse.User()
        user.setUsername("par")
        user.setPassword("1234")
        user.logIn().then(
            navigate("/home"),
            window.location.reload()
        ).catch((error) => {console.error(error);})
    }

    return (
        <div>
            <h1>Welcome to the annual excursion planner.</h1>
            <h3>Choose to sign in as:</h3>
            <br/>
            <GreenButton onClick={logInOrganizer}>Organizer</GreenButton>
            <GreenButton onClick={logInParticipant}>Participant</GreenButton>
            <GreenButton>LogOut</GreenButton>
        </div>
    )
}