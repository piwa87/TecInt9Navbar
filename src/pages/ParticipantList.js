import SingleParticipant from "../components/SingleParticipant"
import Parse from "parse"
import { useEffect, useState } from "react"
import { GreenButton, ButtonText } from '../components/Button';
import { fetchParticipants } from "../api";

export default function ParticipantList({ setUser }) {

    const [participants, setParticipants] = useState([])

    useEffect(() => setUser("org"));

    // useEffect(async () => {
    //     setParticipants(await fetchParticipants())
    // }, []);

    useEffect(() => {
        async function fetch() {
            const response = await fetchParticipants()
            setParticipants(response)
        }
        fetch()
    }, []);

    useEffect(() => {
        console.log("Changed ", participants)
    }, [participants]);

    // console.log("Participants", participants);

    const participantList = participants.map((item) => <SingleParticipant key={item.id} par={item} />)

    // console.log(participantList);

    //  HELPING FUNCTIONS:

    const possibleNames = ["Aliz", "Amalie", "Amanda", "Anders", "Bjørn", "Daniel", "Edith", "Gina", "Gustav", "Helena",
        "Ida Maria", "Ingrid", "Jeppe", "Johanne", "Lea Hannah", "Sara", "Mircea", "Paulia", "Piotrek", "Evgenios"]

    const possibleSurnames = ["Szakacs", "Frøling", "Munk Johnsen", "Hjorth Westh", "Bruhn", "Terte Andersen", "Teglbrænder",
        "Pampoukos", "Fischer", "Krivaa", "Hauser", "Lungu", "Tolstrup", "Wasilewski"]

    const possiblePreferences = ["Kitchen", "Toilet", "Shopping", "Cleaning", "Cooking", "Scouting", "Plowing", "Guarding",
        "Driving", "Eating", "Heavy Lifting", "Babysitting"]

    function createParticipant() {
        const Participant = Parse.Object.extend("Participant")
        const participant = new Participant()
        const fullname = makeName()
        participant.save({
            fullname: fullname,
            age: makeRandomAge(12, 90),
            preferences: makePreferences(),
            name: fullname.split(" ")[0],
        }).then(
            (participant) => {
                console.log("Created a new participant: " + participant.get("fullname"));
                setParticipants(prevState => [...prevState, {
                    id: participant.id, fullname: participant.get("fullname"), preferences: participant.get("preferences"), age: participant.get("age")
                }])
            })
    }

    function makeName() {
        return possibleNames[Math.floor(Math.random() * possibleNames.length)]
            + " "
            + possibleSurnames[Math.floor(Math.random() * possibleSurnames.length)]
    }

    function makeRandomAge(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function makePreferences() {
        return possiblePreferences[Math.floor(Math.random() * possiblePreferences.length)]
            + ", " + possiblePreferences[Math.floor(Math.random() * possiblePreferences.length)]
            + ", " + possiblePreferences[Math.floor(Math.random() * possiblePreferences.length)]
    }


    // RENDER THIS:

    return (
        <div className="participant--list">
            <h3 className="participant--header">
                <span>Name:</span>
                <span>Duty Prefrences:</span>
                <span>Age:</span>
            </h3>
            <br />
            {participantList}
            <br />
            <GreenButton onClick={createParticipant}>
                <ButtonText>Add random participant</ButtonText>
            </GreenButton>
        </div>
    )

}