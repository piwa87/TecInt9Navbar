import SingleParticipant from "../components/SingleParticipant"
import tempParData from "../tempData/participants"
import Parse from "parse"


export default function ParticipantList() {

    function createParticipant() {
        const Participant = Parse.Object.extend("Participant")
        const participant = new Participant()
        participant.save({
            name: makeName() + " " + makeName(),
            age: Math.floor(Math.random() * 13),
            preference: "Kitchen, Cleaning, Cooking"
        }).then((participant) => {
            console.log("Created a new participant: " + participant.get("name"))
        }, (error) => { })
    }

    function makeName() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

    const list = (async () => {
        const query = new Parse.Query('Participant');
        try {
          const results = await query.find();
          console.log(`ParseObjects found: ${JSON.stringify(results)}`);
        } catch (error) {
          console.log(`Error: ${JSON.stringify(error)}`);
        }
      })();
    
    const participantList = tempParData.map((item) => <SingleParticipant key={item.pid} par={item} />)

    return (
        <div className="General">
            <h3>Name: | Duty Prefrences: | Age:</h3>
            {participantList}
            <code>Under Construction!</code>
            <br />
            <button onClick={createParticipant}>Add participant</button>
        </div>
    )

}

//         pid: 1,
//         name: "Anne Nielsen",
//         birthDate: 23,
//         dutyPreference: "Kitchen, Cleaning, Cooking"