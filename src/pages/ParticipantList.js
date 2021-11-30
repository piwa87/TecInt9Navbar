import SingleParticipant from "../components/SingleParticipant"
import Parse from "parse"
import { useEffect, useState } from "react"
import { GreenButton, ButtonText } from '../components/Button';

export default function ParticipantList() {

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

    if (!participants) { return "LOADING..." }
    console.log("PARTICIPANTS: " + participants);

    const participantList = participants.map((item) => <SingleParticipant key={item.id} par={item} />)

    return (
        <div>
            <h3>Name: | Duty Prefrences: | Age:</h3>
            {participantList}
            <br />
            <GreenButton onClick={createParticipant}><ButtonText>Add participant</ButtonText></GreenButton>
        </div>
    )





    //  HELPING FUNCTIONS:

    function createParticipant() {
        const Participant = Parse.Object.extend("Participant")
        const participant = new Participant()
        participant.save({
            name: makeName() + " " + makeName(),
            age: Math.floor(Math.random() * 13),
            preference: "Kitchen, Cleaning, Cooking"
        }).then(
            (participant) => {console.log("Created a new participant: " + participant.get("name"))
        })
    }

    function makeName() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }
}