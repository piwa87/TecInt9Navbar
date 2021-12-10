import { ButtonText, GreenButton, RedButton } from "../components/Button";
import { useState } from "react";
import Parse from "parse";
import GuestSignUpComponent from "../components/GuestSignUpComponent";
import CarSignUpComponent from "../components/carSignUpComponent";

export default function CreateSignUp() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferences, setPreferences] = useState("");
  const [carStatus, setCarStatus] = useState(false);

  const [numberOfGuests, setNumberOfGuests] = useState(1);

  function fullNameChange(e) {
    setFullName(e.target.value);
  }
  function addressChange(e) {
    setAddress(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }
  function phoneChange(e) {
    setPhone(e.target.value);
  }
  function preferenceChange(e) {
    setPreferences(e.target.value);
  }
  function carStatusChangeToYes(e){
    setCarStatus(true);
  }
  function carStatusChangeToNo(e){
    setCarStatus(false);
  }
  function numberOfGuestsChange(e) {
    setNumberOfGuests(e.target.value);
  }

  function clearInput() {
    setFullName("");
    setAddress("");
    setEmail("");
    setPhone("");
    setPreferences("");
    setCarStatus("");
    setNumberOfGuests(0);
  }

  function carAvailable(x) {
    if (carStatus) {
      return <CarSignUpComponent />;
      
    }
  }


  function getGuests(x) {
    const guests = x;
    const myGuests = [];
    if (x > 0) {
      for (let index = 0; index < x; index++) {
        myGuests.push(<GuestSignUpComponent />);
      }
    }
    return myGuests;
  }

  function uploadSignUp() {
    const Participant = Parse.Object.extend("Participant");
    const participant = new Participant();
    participant.set("fullname", fullName);
    participant.set("address", address);
    participant.set("email", email);
    participant.set("phone", phone);
    participant.set("preferences", preferences);
    participant.set("carStatus", carStatus);

    participant.set("numberOfGuests", Number(numberOfGuests));
    participant.save().then(
      (signUp) => {
        alert("You have successfully signed up: " + participant.get("Fullname"));
        clearInput();
      },
      (error) => {
        alert("Something went wrong " + error.message);
      }
    );
  }

  return (
    <div>
      <h3> Sign Up for this year's annual excursion</h3>
      <br />
      <form className="create--form">
        <p>Full name:</p>
        <input
          onChange={fullNameChange}
          value={fullName}
          className="create--input"
          type="text"
          placeholder="Full name"
        />

        <p>Address:</p>
        <input
          onChange={addressChange}
          value={address}
          className="create--input"
          type="text"
          placeholder="Address"
        />

        <p>Email:</p>
        <input
          onChange={emailChange}
          value={email}
          className="create--input"
          type="text"
          placeholder="Email"
        />

        <p>Phone:</p>
        <input
          onChange={phoneChange}
          value={phone}
          className="create--input"
          type="tel"
          placeholder="Phone"
        />

        <p>Preferences:</p>
        <input
          onChange={preferenceChange}
          value={preferences}
          className="create--input"
          type="Dropdown"
          placeholder="Preferences"
        />

        <p>Car Status:</p>
        <input
          onChange={carStatusChangeToYes}
          value={carStatus}
          className="create--input"
          type="checkbox"
          placeholder="Car status"
        />   
        <p></p>
        <input
          onChange={carStatusChangeToNo}
          value={carStatus}
          className="create--input"
          type="checkbox"
          placeholder="Car status"
        />       
        </form>

      {carAvailable()}
      <br/> 
      <form className="create--form">
        <p>Number of guests:</p>
        <input
          onChange={numberOfGuestsChange}
          value={numberOfGuests}
          className="create--input"
          type="number"
          min="0"
          max="4"
          placeholder="Number of guests"
        />

        <br />
      </form>

      {getGuests(numberOfGuests)}

      <GreenButton onClick={uploadSignUp}>
        <ButtonText>Sign Up</ButtonText>
      </GreenButton>
      <RedButton onClick={clearInput}>
        <ButtonText>Cancel</ButtonText>
      </RedButton>
    </div>
  );
}
