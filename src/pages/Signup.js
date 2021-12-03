import { ButtonText, GreenButton, RedButton } from "../components/Button"
import { useState } from "react"
import Parse from "parse"

export default function CreateSignUp() {

    const [fullName, setFullName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [preferences, setPreferences] = useState("")
    const [deadline, setDeadline] = useState("")
    const [capacity, setCapacity] = useState("")

    function fullNameChange(e) {
        setFullName(e.target.value)
    }
    function addressChange(e) {
        setAddress(e.target.value)
    }
    function emailChange(e) {
        setEmail(e.target.value)
    }
    function phoneChange(e) {
        setPhone(e.target.value)
    }
    function preferenceChange(e) {
        setPreferences(e.target.value)
    }
    function deadlineChange(e) {
        setDeadline(e.target.value)
    }
    function capacityChange(e) {
        setCapacity(e.target.value)
    }

    function clearInput() {
        setFullName("")
        setAddress("")
        setEmail("")
        setPhone("")
        setPreferences("")
        setDeadline("")
        setCapacity("")
    }

    function uploadSignUp() {
        const SignUp = Parse.Object.extend("SignUp");
        const signUp = new SignUp();
        signUp.set("Fullname", fullName);
        signUp.set("Address", address);
        signUp.set("Email", email);
        signUp.set("Phone", phone);
        signUp.set("Preferences", preferences);
        signUp.set("capacity", capacity);
        signUp.save().then((signUp) => {
            alert('You have successfully signed up: ' + signUp.get("Fullname"))
            clearInput();
        }, (error) => {
            alert('Something went wrong ' + error.message);
        });
    }

    return (
        <div>
            <h3>Sign Up for this year's annual excursion</h3>
            <br />
            <form className="create--form">
                <p>Full name:</p>
                <input
                    onChange={fullNameChange}
                    value={fullName}
                    className="create--input"
                    type="text"
                    placeholder="Full name" />

                <p>Address:</p>
                <input
                    onChange={addressChange}
                    value={address}
                    className="create--input"
                    type="text"
                    placeholder="Address" />

                <p>Email:</p>
                <input
                    onChange={emailChange}
                    value={email}
                    className="create--input"
                    type="text"
                    placeholder="Email" />

                <p>Phone:</p>
                <input
                    onChange={phoneChange}
                    value={phone}
                    className="create--input"
                    type="tel"
                    placeholder="Phone" />

                <p>Preferences:</p>
                <input
                    onChange={preferenceChange}
                    value={preferences}
                    className="create--input"
                    type="Dropdown"
                    placeholder="Preferences" />

                <p>Deadline:</p>
                <input
                    onChange={deadlineChange}
                    value={deadline}
                    className="create--input"
                    type="text"
                    placeholder="Deadline:" />

                <p>Max. Capacity:</p>
                <input
                    onChange={capacityChange}
                    value={capacity}
                    className="create--input"
                    type="number"
                    placeholder="Max. Capacity:" />

            </form>
            <GreenButton onClick={uploadSignUp}>
                <ButtonText>Sign Up</ButtonText>
            </GreenButton>
            <RedButton onClick={clearInput}>
                <ButtonText>Cancel</ButtonText>
            </RedButton>
        </div>
    )
}