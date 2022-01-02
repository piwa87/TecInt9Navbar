import Parse from "parse"
import { useState } from "react"
import { SmallGreenButton } from "./Button"

export default function GuestSignUpComponent({ i, duties }) {

    const [guestData, setGuestData] = useState({
        fullname: "",
        birthday: "",
        pref1: "",
        pref2: "",
        pref3: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        setGuestData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        uploadGuest();
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
        guest.set("fullname", guestData.fullname);
        guest.set("birthday", guestData.birthday);
        guest.set("pref1", guestData.pref1);
        guest.set("pref2", guestData.pref2);
        guest.set("pref3", guestData.pref3);
        guest.set("name", guestData.fullname.split(" ")[0])
        guest.set("age", getAge(guestData.birthday))

        guest.save().then((guest) => {
            alert('You have added a guest: ' + guest.get("fullname"));
        }, (error) => {
            alert('Something went wrong ' + error.message);
        });
    }

    return (
        <>
            <p className="guest-header">Guest #{i + 1} information:</p>

            Full name:
            <input
                type="text"
                placeholder={`Guest #${i + 1} full name`}
                onChange={handleChange}
                name="fullname"
                value={guestData.fullname}
                required="required"
            />

            <p>Birthday:</p>
            <input
                type="date"
                placeholder="Guest's birthday"
                onChange={handleChange}
                name="birthday"
                value={guestData.birthday}
                required="required"
            />

            Duty Preferences:<p></p>

            #1:
            <select
                size="1"
                onChange={handleChange}
                name="pref1"
                value={guestData.pref1}
            >
                <option value="">-- Choose --</option>
                {duties.map(d => <option ket={d} value={d}>{d}</option>)}
            </select>

            <label>#2:</label>
            <select
                size="1"
                onChange={handleChange}
                name="pref2"
                value={guestData.pref2} >
                <option value="">-- Choose --</option>
                {duties.map(d => <option ket={d} value={d}>{d}</option>)}
            </select>

            <label>#3:</label>
            <select
                size="1"
                onChange={handleChange}
                name="pref3"
                value={guestData.pref3} >
                <option value="">-- Choose --</option>
                {duties.map(d => <option ket={d} value={d}>{d}</option>)}
            </select>
            <SmallGreenButton className="guest-save-button" onClick={handleSubmit}>Save Guest</SmallGreenButton>
        </>
    )
}