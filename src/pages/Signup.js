import { ButtonText, GreenButton, RedButton } from "../components/Button"
import {  useState } from "react"
import Parse from "parse"
import GuestSignUpComponent from "../components/GuestSignUpComponent"
import { useNavigate } from "react-router"


export default function CreateSignUp() {

    const navigate = useNavigate()
    const [fullname, setFullName] = useState("")
    const [address, setAddress] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [preferences, setPreferences] = useState("")
    const [carStatus, setCarStatus] = useState(false)
    const [numberOfGuests, setNumberOfGuests] = useState(0)

    function fullNameChange(e) {
        setFullName(e.target.value)
    }

    function birthdayChange(e){
        setBirthday(e.target.value)
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
    function carStatusChangeToYes(e){
      setCarStatus(true);
    }
    function carStatusChangeToNo(e){
      setCarStatus(false);
    }
    function numberOfGuestsChange(e) {
        setNumberOfGuests(e.target.value)
    }


    function clearInput() {
        setFullName("")
        setBirthday("")
        setAddress("")
        setEmail("")
        setPhone("")
        setPreferences("")
        setCarStatus(false)
        setNumberOfGuests(0)
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

    function getGuests(){
        //const guests = x; 
        const myGuests = [] 
        if (numberOfGuests > 0 && numberOfGuests<5){
                 for (let index = 0; index < numberOfGuests; index++) {
                     
                    myGuests.push(<GuestSignUpComponent/>)
                 }
            } else{
                
            }
            return(
                myGuests
            )
        }

        function carAvailable(x) {
          if (carStatus) {
            return <CarSignUpComponent />;
            
          }
        }

    function uploadSignUp() {
        const Participant = Parse.Object.extend("Participant");
        const participant = new Participant();
        participant.set("fullname", fullname);
        participant.set("name", fullname.split(" ")[0]);
        participant.set("birthday", birthday);
        participant.set("age", getAge(birthday));
        participant.set("address", address);
        participant.set("email", email);
        participant.set("phone", Number(phone));
        participant.set("preferences", preferences);
        participant.set("carStatus", carStatus);
        participant.set("numberOfGuests", Number(numberOfGuests));

        participant.save().then((participant) => {
            navigate("/afterSignUp")
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
                    value={fullname}
                    className="create--input"
                    type="text"
                    placeholder="Full name" />
                
                <p>Birthday:</p>
                <input
                    onChange={birthdayChange}
                    value={birthday}
                    className="create--input"
                    type="date"
                    placeholder="Birthday" />

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
                    type="number"
                    placeholder="Phone" />

                <p>Preferences:</p>
                <input
                    onChange={preferenceChange}
                    value={preferences}
                    className="create--input"
                    type="Dropdown"
                    placeholder="Preferences" />

                <p>Car Status: </p>                    
                <label> Check the box if you will drive to the destination <input
                    onClick={carStatusChange}
                    value={carStatus}
                    className="create--checkbox"
                    type="checkbox"
                    /></label>

                <p>Number of guests:</p>
                <input
                    onChange={numberOfGuestsChange}
                    value={numberOfGuests}
                    className="create--input"
                    type="number"
                    min="0"
                    max="4"
                    pattern="[0-9]+"
                    placeholder="Number of guests"
                    />

                    <br/>
            </form>
            {getGuests(numberOfGuests)}

            <GreenButton onClick={uploadSignUp}>
                <ButtonText>Sign Up</ButtonText>
            </GreenButton>
            <RedButton onClick={clearInput}>
                <ButtonText>Cancel</ButtonText>
            </RedButton>
        </div>
    )
}