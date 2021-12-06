import Parse from "parse"
import { useState } from "react"

export default function GuestSignUpComponent(props){
    
    const [guestFullName, setGuestFullName] = useState("")
    const [guestBirthday, setGuestBirthday] = useState("")
    const [guestPreferences, setguestPreferences] = useState("")

    function guestFullNameChange(e) {
        setGuestFullName(e.target.value)
    }
    function guestBirthdayChange(e) {
        setGuestBirthday(e.target.value)
    }
    function guestPreferencesChange(e) {
        setguestPreferences(e.target.value)
    }

    function clearInput() {
        setGuestFullName("")
        setGuestBirthday("")
        setguestPreferences("")
    }

    function uploadSignUp() {
        const SignUp = Parse.Object.extend("SignUp");
        const signUp = new SignUp();
        signUp.set("GuestFullname", guestFullName);
        signUp.set("GuestBirthday", guestBirthday);
        signUp.set("GuestPreferences", guestPreferences);
    }

    return(

    <form className ="create--form">
        <h3> Guest information:</h3>
        <br/>
        <p>Guest full name: </p>
                <input
                    onChange={guestFullNameChange}
                    value={guestFullName}
                    className="create--input"
                    type="text"
                    placeholder="Guest full name" />

        <p>Birthday of guest:</p>
                <input
                    onChange={guestBirthdayChange}
                    value={guestBirthday}
                    className="create--input"
                    type="date"
                    placeholder="Birhday of guest" />

        <p>Preferences of guest:</p>
                <input
                    onChange={guestPreferencesChange}
                    value={guestPreferences}
                    className="create--input"
                    type="text"
                    placeholder="Preferences of guest" />
    </form>
    )
}