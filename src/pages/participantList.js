import React from "react"
import SingleParticipant from "./SingleParticipant"
import tempParData from "../tempData/participants"


function ParticipantList() {

    const participantList = tempParData.map(item => <SingleParticipant key={item.pid} par={item}/>)

    return (
        <div className="General">
            <h3>Name: | Duty Prefrences: | Age:</h3> 
            {participantList}
        </div>
    )
}


export default ParticipantList