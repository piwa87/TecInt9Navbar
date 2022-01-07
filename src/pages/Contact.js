import { useEffect } from "react";


export default function Contact({ setUser }) {

    useEffect(() => { setUser("par") })

    return (
        <div className="contact-div">
            <h1>Contact organizers:</h1>
            <p className="contact-text">
                For more information, help, late sign-ups or changes please don't hesitate to contact us
                by email or phone.
                <br />
                <br />
                Email:
                <br />
                <a className="contact-email" href="mailto:info@annualexcursion.com">info@annualexcursion.com</a>
                <br />
                <br />
                Phone:
                <br />
                <a className="contact-email" href="tel:+4510203040">+45 10 20 30 40</a>
                <br />
                <br />
            </p>
            <b>Opening hours:</b>
            <ul>
                <li>Monday: 08:00-15:30</li>
                <li>Tuesday: 12:00-15:30 </li>
                <li>Wednesday: 08:00-15:30 </li>
                <li>Thursday: 12:00-15:30 </li>
                <li>Friday: 08:00-15:30</li>
            </ul>
            <br />

        </div>
    );
}