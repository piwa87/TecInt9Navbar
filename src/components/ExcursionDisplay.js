import { useNavigate } from "react-router";
import "../tempData/excursionDetails";
import { ButtonSignup, ButtonTextSignUp } from './Button';
import "./ExDisplay.css";


export default function ExcursionDisplay({ ex }) {

    const navigate = useNavigate();

    console.log(ex);

    return (
        (ex) ?
            <div className="ex-info">
                <img alt="" className="ex-image" src={ex.imgURL} />
                <h2>{ex.title}</h2>
                <section className="ex-description">
                    {ex.description}
                </section>

                <section className="ex-data">
                    Dates:<b>{ex.startDate} - {ex.endDate}</b>
                    Location: <b>{ex.location}</b>
                    Adult: <b>{ex.price} Kr.</b>
                    Child: <b>{ex.price / 2} Kr.</b>
                </section>

                <hr />

                <section className="ex-description" style={{textAlign: "center"}}>
                    Join this year’s excursion, there is room for {ex.capacity} people.
                    <br />
                    We are looking forward to see you!
                </section>
                <br />
                <ButtonSignup className="ex-button" onClick={() => navigate("/signup")}>
                    <ButtonTextSignUp>Sign up</ButtonTextSignUp>
                </ButtonSignup>
            </div>
            : <div className="just_margin">
                <p>Unforunately there are no excursions yet...</p>
            </div>
    )
}