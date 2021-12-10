import { useNavigate } from "react-router";
import "../tempData/excursionDetails";
import { ButtonSignup, ButtonTextSignUp } from './Button';
import "./Ex.css";


export default function ExcursionDisplay(props) {

    const navigate = useNavigate();

    return (
        <div className="ex-info">
            <img alt="" className="ex-image" src={props.img} />
            <p>Duration: <b>{props.duration} {props.date}</b> </p>
            <p>Location: <b>{props.location}</b></p>
            <p>Adult: <b>{props.price} Kr.</b></p>
            <p>Child: <b>{props.price / 2} Kr.</b></p>

            <hr />
            <p>Join this year’s excursion, there is room for {props.capacity} people. We look forWard to seeing you!</p>
            <p>
                <ButtonSignup className="ex-button" onClick={() => navigate("/signup")}>
                    <ButtonTextSignUp>Sign up</ButtonTextSignUp>
                </ButtonSignup>
            </p>
        </div>
    )
}
