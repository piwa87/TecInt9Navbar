import { useNavigate } from "react-router";
import { ButtonSignup, ButtonTextSignUp } from './Button';
import { getWeekday } from "../api"

import "../tempData/excursionDetails";
import "./ExDisplay.css";


export default function ExcursionDisplay({ ex }) {

    const navigate = useNavigate();

    console.log(getWeekday("2022-01-01"));

    return (
        (ex) ?
            <div className="ex-info">
                <img alt="" className="ex-image" src={ex.imgURL} />
                <h2>{ex.title}</h2>
                <section className="ex-description">
                    {ex.description}
                </section>

                <section className="ex-data">
                    Dates:<b>{getWeekday(ex.startDate)} to {getWeekday(ex.endDate)}<br></br> {ex.startDate} - {ex.endDate}</b>
                    Location: <b>{ex.location}</b>
                    Adult: <b>{ex.price} Kr.</b>
                    Child: <b>{ex.price / 2} Kr.</b>
                </section>



                <hr />

                <section
                    className="ex-description"
                    style={{ textAlign: "center" }}>
                    Join this year`s excursion, there is room for {ex.capacity} people.
                    <br />
                    We are looking forward to see you!
                </section>
                <br />
                <ButtonSignup className="ex-button" onClick={() => navigate("/signup")}>
                    <ButtonTextSignUp>Sign up</ButtonTextSignUp>
                </ButtonSignup>
            </div>
            :
            <p className="just_margin">Unforunately there are no excursions yet...</p>

    )
}