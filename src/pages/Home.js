import Parse from "parse"
import { useNavigate } from "react-router"
import { GreenButton } from "../components/Button"

export default function Home() {

    const navigate = useNavigate()

    function logInOrganizer(e) {
        e.preventDefault()
        const user = new Parse.User()
        user.setUsername("org")
        user.setPassword("12345")
        user.logIn().then((loggedInUser) => {
            console.log("Logged in user: " + loggedInUser)
            navigate("/Home")
            window.location.reload()
        })
    }

    function logInParticipant() {
        const user = new Parse.User()
        user.setUsername("par")
        user.setPassword("1234")
        user.logIn().then((loggedInUser) => {
            console.log("Logged in user: " + loggedInUser)
            navigate("/Home")
            window.location.reload()
        })
    }

    return (
        <div className="General">
            <h1>Choose to sign in as:</h1>
            <GreenButton onClick={logInOrganizer}>Organizer</GreenButton>
            <br/>
            <GreenButton onClick={logInParticipant}>Participant</GreenButton>
    
        </div>
    )
}