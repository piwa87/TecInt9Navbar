import { useNavigate } from "react-router"
import { Icon } from '@iconify/react';

export default function Home({ setUser }) {

    const navigate = useNavigate()

    function logInOrganizer() {
        setUser("org")
        navigate("/createexcursion")
    }

    function logInParticipant() {
        setUser("par")
        navigate("/excursions")
    }

    return (
        <div className="home">
            <h1>Welcome to your annual excursion planner.</h1>
            <br />
            <h3>Please choose your role:</h3>
            <br />
            <div className="home--icons">
                <div className="home--par">
                    <Icon
                        icon="healthicons:travel"
                        color="#555"
                        width="190"
                        height="190"
                        onClick={logInParticipant}
                        cursor="pointer"
                    />
                    <h4>Participant</h4>
                </div>
                <div className="home--org">
                    <Icon icon="clarity:administrator-solid"
                        color="#555"
                        width="190"
                        height="190"
                        onClick={logInOrganizer}
                        cursor="pointer" />
                    <h4>Organizer</h4>
                </div>
            </div >
        </div >
    )
}