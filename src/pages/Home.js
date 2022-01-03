import { useNavigate } from "react-router"
import { Icon } from '@iconify/react'
import { useEffect } from "react"

export default function Home({ setUser }) {

    const navigate = useNavigate()

    function logInOrganizer(e) {
        e.preventDefault()
        setUser("org")
        navigate('/admin')
    }

    function logInParticipant(e) {
        e.preventDefault()
        setUser("par")
        navigate('/excursions')
    }

    return (
        <div className="home">
            <h1>Welcome to your annual excursion planner.</h1>
            <br />
            <h3>Please choose your role:</h3>
            <br />
            <div className="home--icons">
                <div>
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
                <div>
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