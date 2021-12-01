import SingleParticipant from "../components/SingleParticipant"
import Parse from "parse"
import { useEffect, useState } from "react"
import { GreenButton, ButtonText } from '../components/Button';

export default function ParticipantList() {


    // BUSINESS LOGIC:

    const [participants, setParticipants] = useState([])

    useEffect(() => {
        (async () => {
            const query = new Parse.Query('Participant');
            try {
                const results = await query.find();
                setParticipants(results)
            } catch (error) {
                console.log(`Error: ${JSON.stringify(error)}`);
            }
        })();
    }, [])


    const participantList = participants.map((item) => <SingleParticipant key={item.id} par={item} />)

    //  HELPING FUNCTIONS:

    const possibleNames = ["Anne", "Bob", "Kevin", "Janek", "Niels", "Nick", "Liam", "Laurenz"]
    const possibleSurnames = ["Nielsen", "Nowak", "Langeree", "Walker", "Bond", "Frederiksen", "Lykke", "Kjaergaard"]
    const possiblePreferences = ["Kitchen", "Toilet", "Shopping", "Cleaning", "Cooking", "Scouting", "Plowing", "Guarding"]

    function createParticipant() {
        const Participant = Parse.Object.extend("Participant")
        const participant = new Participant()
        participant.save({
            name: makeName(),
            age: makeRandomAge(12, 90),
            preference: makePreferences()
        }).then(
            (participant) => {
                console.log("Created a new participant: " + participant.get("name"));
                window.location.reload()
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
        return possiblePreferences[Math.floor(Math.random()* possiblePreferences.length)]
        + ", " + possiblePreferences[Math.floor(Math.random()* possiblePreferences.length)]
        + ", " + possiblePreferences[Math.floor(Math.random()* possiblePreferences.length)]
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
            <GreenButton onClick={createParticipant}><ButtonText>Add random participant</ButtonText></GreenButton>
        </div>
    )

}