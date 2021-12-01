import "../tempData/excursionDetails";
import { ButtonSignup, ButtonTextSignUp } from './Button';
import "./Ex.css";
import { useHistory } from 'react-router-dom';



export default function ExcursionDisplay(props) {
    return( 
        <div className = "ex-info">
        <img alt="" className="ex-image" src={props.par.img}/> 
        <p>Duration: <b>{props.par.duration} {props.par.date}</b> </p> 
        <p>Location: <b>{props.par.location}</b></p>
        <p>Adult: <b>{props.par.priceAdult} Kr.</b></p>
        <p>Child: <b>{props.par.priceAdult/2} Kr.</b></p>
  
        <hr/>
        <p>Join this year’s excursion, there is room for {props.par.maxCapacity} people. We look forward to seing you!</p>
        <p className="ex-button"><ButtonSignup><ButtonTextSignUp>Sign up</ButtonTextSignUp></ButtonSignup></p>


        </div>
    )
}
