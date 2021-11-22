import React from "react"
import "./TransportCardStyle.css"
import "../tempData/transportParticipants"





export function ProfilePicture(props){
    return(
        <img className="profilePicture" src={props.par.img} />
        )
}

export default ProfilePicture