import { TheGreenButton, RedButton } from "../components/Button";
import { useEffect, useState } from "react";
import Parse from "parse";
import GuestSignUpComponent from "../components/GuestSignUpComponent";
import CarSignUpComponent from "../components/CarSignUpComponent";
import { useNavigate } from "react-router";
import { fetchDuties } from "../api";

export default function CreateSignUp() {

  const navigate = useNavigate();

  const [duties, setDuties] = useState([])
  const [signupData, setSignupData] = useState({
    fullname: "",
    birthday: "",
    address: "",
    email: "",
    phone: "",
    pref1: "",
    pref2: "",
    pref3: "",
    carStatus: false,
    noGuests: "",
  });

  useEffect(() => {
    async function fetchData() {
      const result = await fetchDuties();
      setDuties(result.map(i => i.dutyName));
    }
    fetchData();
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setSignupData(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    uploadSignUp();
    if (signupData.carStatus) { console.log("Uploading car details..."); }
    if (signupData.noGuests > 0) { console.log("Uploading guests..."); }
  }

  function resetSignupData() {
    setSignupData({
      fullname: "",
      birthday: "",
      address: "",
      email: "",
      phone: "",
      pref1: "",
      pref2: "",
      pref3: "",
      carStatus: "",
      noGuests: "",
    })
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

  function getGuests() {
    const myGuests = [];
    for (let index = 0; index < signupData.noGuests; index++) {
      myGuests.push(<GuestSignUpComponent i={index} duties={duties} />);
    }
    return myGuests;
  }

  function uploadSignUp() {
    const Participant = Parse.Object.extend("Participant");
    const participant = new Participant();
    participant.set("fullname", signupData.fullname);
    participant.set("name", signupData.fullname.split(" ")[0]);
    participant.set("birthday", signupData.birthday);
    participant.set("age", getAge(signupData.birthday));
    participant.set("address", signupData.address);
    participant.set("email", signupData.email);
    participant.set("phone", Number(signupData.phone));
    participant.set("pref1", signupData.pref1);
    participant.set("pref2", signupData.pref2);
    participant.set("pref3", signupData.pref3);
    participant.set("carStatus", signupData.carStatus);
    participant.set("numberOfGuests", Number(signupData.noGuests));
    participant.save().then(
      () => {
        navigate("/afterSignUp");
      },
      (error) => {
        alert("Something went wrong " + error.message);
      }
    );
  }

  return (
    <div className="sign-up">
      <h2>Sign up for this year's annual excursion</h2>
      <br />
      <form className="create-form" id="form" onSubmit={handleSubmit}>
        Full name:
        <input
          type="text"
          placeholder="Full name"
          onChange={handleChange}
          name="fullname"
          value={signupData.fullname}
          required="required"
        />

        Birthday:
        <input
          type="date"
          placeholder="Birthday"
          onChange={handleChange}
          name="birthday"
          value={signupData.birthday}
          required="required"
        />

        Address:
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={signupData.address}
          required="required"
        />

        Email:
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={signupData.email}
          required="required"
        />

        Phone:
        <input
          type="number"
          placeholder="Phone number"
          onChange={handleChange}
          name="phone"
          value={signupData.phone}
          required="required"
        />

        <br />
        Duty Preferences:<p></p>

        <label>#1:</label>
        <select
          size="1"
          onChange={handleChange}
          name="pref1"
          value={signupData.pref1} >
          <option value="">-- Choose --</option>
          {duties.map(d => <option ket={d} value={d}>{d}</option>)}
        </select>

        <label>#2:</label>
        <select
          size="1"
          onChange={handleChange}
          name="pref2"
          value={signupData.pref2} >
          <option value="">-- Choose --</option>
          {duties.map(d => <option ket={d} value={d}>{d}</option>)}
        </select>

        <label>#3:</label>
        <select
          size="1"
          onChange={handleChange}
          name="pref3"
          value={signupData.pref3} >
          <option value="">-- Choose --</option>
          {duties.map(d => <option ket={d} value={d}>{d}</option>)}
        </select>

        Car Status:
        <p>
          <input
            id="check"
            type="checkbox"
            checked={signupData.carStatus}
            onChange={handleChange}
            name="carStatus"
          />
          <label htmlFor="check">
            <small>&emsp;(check this box if you will drive to the destination)</small>
          </label>
        </p>

        {signupData.carStatus && <CarSignUpComponent />}

        Number of Guests:
        <select
          size="1"
          onChange={handleChange}
          name="noGuests"
          value={signupData.noGuests} >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        {getGuests(signupData.noGuests)}


        <TheGreenButton className="signup-button" onClick={handleSubmit}>Sign Up</TheGreenButton>
        <RedButton className="cancel-button" onClick={resetSignupData}>Cancel</RedButton>


      </form>
    </div>
  );
}
