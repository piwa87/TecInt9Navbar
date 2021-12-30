import { useNavigate } from "react-router";
import "../tempData/excursionDetails";
import { ButtonSignup, ButtonTextSignUp } from './Button';
import "./ExDisplay.css";


export default function ExcursionDisplay(props) {

    const navigate = useNavigate();

    return (
        <div className="ex-info">
            <img alt="" className="ex-image" src={props.img} />
            <h2>{props.title}</h2>
            <p>Date: <b>{props.date}</b><br />
                Location: <b>{props.location}</b><br />
                Adult: <b>{props.price} Kr.</b><br />
                Child: <b>{props.price / 2} Kr.</b></p>
            <hr />
            <p>Join this year’s excursion, there is room for {props.capacity} people. 
            <br/>
            We look forward to seeing you!</p>
            <br />
            <ButtonSignup className="ex-button" onClick={() => navigate("/signup")}>
                <ButtonTextSignUp>Sign up</ButtonTextSignUp>
            </ButtonSignup>
        </div>
    )
}