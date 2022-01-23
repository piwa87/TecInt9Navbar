import { TheGreenButton, RedButton } from "../components/Button";
import { useEffect, useState } from "react";
import GuestSignUpComponent from "../components/GuestSignUpComponent";
import CarSignUpComponent from "../components/CarSignUpComponent";
import { useNavigate } from "react-router";
import { fetchAllDuties, uploadSignUp } from "../api";
import ExDetails from "../components/ExDetails";

export default function CreateSignUp({ setUser, excursions }) {

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

  const [carData, setCarData] = useState({
    license: "",
    color: "",
    seats: 0,
  })

  useEffect(() => setUser("par"))

  useEffect(() => {
    async function fetchData() {
      const result = await fetchAllDuties();
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
    uploadSignUp(signupData, carData);
    window.scrollTo(0, 0);
    navigate('/AfterSignUp');
  }

  function getGuests() {
    const myGuests = [];
    for (let i = 0; i < signupData.noGuests; i++) {
      myGuests.push(<GuestSignUpComponent key={i + 4} i={i} duties={duties} />);
    }
    return myGuests;
  }


  return (
    <div className="sign-up">
      <h2>Sign up for this year's annual excursion:</h2>
      {(excursions[excursions.length - 1] === undefined) ? <></> : <ExDetails excursion={excursions[excursions.length - 1]} />}
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
          {duties.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <label>#2:</label>
        <select
          size="1"
          onChange={handleChange}
          name="pref2"
          value={signupData.pref2} >
          <option value="">-- Choose --</option>
          {duties.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <label>#3:</label>
        <select
          size="1"
          onChange={handleChange}
          name="pref3"
          value={signupData.pref3} >
          <option value="">-- Choose --</option>
          {duties.map(d => <option key={d} value={d}>{d}</option>)}
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

        {signupData.carStatus && <CarSignUpComponent setCarData={setCarData} />}

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

        <TheGreenButton className="signup-button">Sign Up</TheGreenButton>
        <RedButton className="cancel-button" type="reset" onClick={() => navigate('/excursions')}>Cancel</RedButton>
      </form>
    </div>
  );
}
