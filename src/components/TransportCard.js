import React from 'react';
import { GreenButton, ButtonDisabled, ButtonText } from './Button';
import "./TransportCardStyle.css";
import "../tempData/transportParticipants.js"



export function TransportCard(props){
    return (<div className="card">
        <img class="card-img-top" img="cabin.jpg" alt=""/>
        <div class="card-body">
            <h4> {props.par.name} </h4>
            <p> Car color: {props.par.carColor} </p> 
            <p>License plate: {props.par.licensePlate} </p>
            <p> Seats: {props.par.seats}</p>  
            <p>  Deapture: {props.par.depature} </p>
                
                <GreenButton><ButtonText> Reserve seat</ButtonText></GreenButton>
                <ButtonDisabled><ButtonText> Cancel seat</ButtonText></ButtonDisabled>
                   
        </div>
        </div>
    )
}


/* export function transportCard() {
    return (
        <div className= "card">
            <p className="cardText"> 
                Mikkel Larsen
                <br></br>
                Car color : Blue
            </p>
            <GreenButton><ButtonText> Reserve seat</ButtonText></GreenButton>
            <ButtonDisabled><ButtonText>Cancel seat</ButtonText></ButtonDisabled>
        </div>
    )
} */

export default TransportCard



