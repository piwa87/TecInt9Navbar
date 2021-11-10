import React from "react"

function SingleParticipant(props) {
    return (
        <div>            
            <p>{props.par.name} | {props.par.dutyPreference} | {props.par.birthDate}</p> 
        </div>
    )
}

export default SingleParticipant