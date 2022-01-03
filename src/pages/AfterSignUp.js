import { TheGreenButton } from "../components/Button";
import { useNavigate } from "react-router"

export default function AfterSignUp() {

    const navigate = useNavigate()

    function findRide() {
        navigate('/transport')
    }

    return (
        <div className="sign-up">
            <h3>Thanks for signing up
                <br />
                We look forward to seeing you!</h3>
            <p> If you are not able to drive yourself, you can find a ride here: </p>
            <TheGreenButton onClick={findRide}>Available car seats</TheGreenButton>
        </div>
    )
}