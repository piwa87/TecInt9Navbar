import SingleParticipant from "../components/SingleParticipant"
import tempParData from "../tempData/participants"


export default function ParticipantList() {

    const participantList = tempParData.map((item) =>
        <SingleParticipant key={item.pid} par={item} />)

    return (
        <div className="General">
            <h3>Name: | Duty Prefrences: | Age:</h3>
            {participantList}
            <code>Under Construction!</code>
        </div>
    )
}