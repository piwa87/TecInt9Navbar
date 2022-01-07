import SingleParticipant from "../components/SingleParticipant"
import ExDetails from "../components/ExDetails";

import Parse from "parse"
import { useEffect, useState } from "react"
import { fetchParticipants } from "../api";

export default function ParticipantList({ setUser, excursions }) {

    const [participants, setParticipants] = useState([])

    useEffect(() => setUser("org"));

    useEffect(() => {
        async function fetchData() {
            const result = await fetchParticipants();
            setParticipants(result);
        }
        fetchData();
    }, []);

    function deleteParticipant(parID) {
        setParticipants(participants.filter(p => { return p.id !== parID }))
        const Participant = new Parse.Object('Participant');
        Participant.set('objectId', parID);
        const name = Participant.get('fullname');
        Participant.destroy().then(
            console.log("Deleted participant: " + name)
        );
    };


    const participantList = participants.map((item) => <SingleParticipant key={item.id} par={item} deleteParticipant={deleteParticipant} />)

   

    return (
        <div className="participant-list">
            <h3>Participant list:</h3>
            {(excursions[excursions.length - 1] === undefined) ? <></> : <ExDetails excursion={excursions[excursions.length - 1]} />}
            <br />
            <section className="participant-header">
                <span>Name:</span>
                <span>Duty Prefrences:</span>
                <span>Age:</span>
            </section>
            <br />
            {participantList}
        </div>
    )

}