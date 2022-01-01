import Parse from "parse"
import { useState } from "react"
import { SmallGreenButton } from "./Button"

export default function GuestSignUpComponent({ i }) {

    const [fullname, setFullName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [preferences, setPreferences] = useState("")

    function fullNameChange(e) {
        setFullName(e.target.value)
    }
    function birthdayChange(e) {
        setBirthday(e.target.value)
    }
    function preferencesChange(e) {
        setPreferences(e.target.value)
    }

    //Calculates the age based on the birth date
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function uploadGuest() {
        const Participant = Parse.Object.extend("Participant");
        const guest = new Participant();
        guest.set("fullname", fullname);
        guest.set("birthday", birthday);
        guest.set("preferences", preferences);
        guest.set("name", fullname.split(" ")[0])
        guest.set("age", getAge(birthday))

        guest.save().then((guest) => {
            alert('You have added a guest: ' + guest.get("fullname"));
        }, (error) => {
            alert('Something went wrong ' + error.message);
        });
    }

    return (
        <>
            <p className="guest-header">Guest #{i + 1} information:</p>
            Guest's full name:
            <input
                onChange={fullNameChange}
                value={fullname}
                className="create--input"
                type="text"
                placeholder="Guest full name" />

            <p>Birthday of guest:</p>
            <input
                onChange={birthdayChange}
                value={birthday}
                className="create--input"
                type="date"
                placeholder="Birhday of guest" />

            <p>Preferences of guest:</p>
            <input
                onChange={preferencesChange}
                value={preferences}
                className="create--input"
                type="text"
                placeholder="Preferences of guest" />

            <SmallGreenButton className="guest-save-button" onClick={uploadGuest}>Save Guest</SmallGreenButton>    
        </>
    )
}