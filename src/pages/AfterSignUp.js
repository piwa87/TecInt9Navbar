import { ButtonText, GreenButton } from "../components/Button";
import { useNavigate } from "react-router"

export default function AfterSignUp() {
    const navigate = useNavigate()

    function findRide(){
        navigate("/transport")
    }

    return (
        <div>
            <h3>Thanks for signing up - We look forward to seeing you!</h3>
            <p> If you are not able to drive yourself, you can find a ride here: </p>
            <GreenButton onClick={findRide}><ButtonText>Available car seats</ButtonText></GreenButton>
        </div>
    )
}