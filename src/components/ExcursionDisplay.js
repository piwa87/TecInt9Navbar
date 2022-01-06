import { useNavigate } from "react-router";
import { TheGreenButton } from './Button';
import { getWeekday, getMonth, getDayOfMonth, getYear } from "../api"

import "../tempData/excursionDetails";
import "./ExcursionDisplay.css";


export default function ExcursionDisplay({ excursionData: ex }) {

    const navigate = useNavigate();



    return (
        <div className="ex-info">
            <img alt="" className="ex-image" src={ex.imgURL} />
            <h2>{ex.title}</h2>
            <section className="ex-description">
                {ex.description}
            </section>

            <section className="ex-data">
                Dates: <b>{getWeekday(ex.startDate)} to {getWeekday(ex.endDate)}
                &emsp;&emsp;{getMonth(ex.endDate)}&ensp;{getDayOfMonth(ex.startDate)} - {getDayOfMonth(ex.endDate)}&ensp;{getYear(ex.endDate)}
                </b>
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
            <TheGreenButton className="ex-button" onClick={() => navigate('/signup')}>Sign up</TheGreenButton>
        </div>
    )
}