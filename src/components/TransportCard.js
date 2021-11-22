import React from 'react';
import { GreenButton, ButtonDisabled, ButtonText } from './Button';
import "./TransportCardStyle.css";
import "../tempData/transportParticipants.js"
import "./ProfilePicture"



export function TransportCard(props){
    return (<div className="card">
            <p className="card--heading"> {props.par.name} </p>
            <img className="card--picture" src={props.par.img}/>  
            <p className="card--text">Car color: <b>{props.par.carColor}</b> </p> 
            <p className="card--text"> License plate:<b> {props.par.licensePlate} </b></p>
            <p className="card--text"> Seats:<b> {props.par.seats}</b></p>  
            <p className="card--text"> Departure:<b> {props.par.depature} </b></p>
            <p className="card--button"><GreenButton><ButtonText> Reserve seat</ButtonText></GreenButton>
            <ButtonDisabled><ButtonText> Cancel seat</ButtonText></ButtonDisabled></p> 
            </div>
    )
}


export default TransportCard



