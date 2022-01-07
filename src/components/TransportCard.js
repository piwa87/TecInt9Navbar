import { GreenButton, ButtonDisabled, ButtonText } from './Button';
import "./TransportCardStyle.css";
import "../tempData/transportParticipants.js"

export default function TransportCard(props) {

    return (
        <div className="card">
            <p className="card-heading"> {props.par.name} </p>
            <img alt="" className="card-picture" src={props.par.img} />
            <p className="card-text">Car color: <b>{props.par.carColor}</b> </p>
            <p className="card-text"> License plate:<b> {props.par.licensePlate} </b></p>
            <p className="card-text"> Seats:<b> {props.par.seats}</b></p>
            <p className="card-text"> Departure:<b> {props.par.depature} </b></p>
            <p className="card-button">
                <GreenButton onClick={() => alert('#missing - functionality to reserve seats')}><ButtonText>Reserve Seat</ButtonText></GreenButton>
                <ButtonDisabled onClick={() => alert('#missing - functionality to cancel reserved seats')}><ButtonText>Cancel Seat</ButtonText></ButtonDisabled>
            </p>
        </div>
    )
}