import Parse from "parse"
import { useState } from "react"
import { ButtonText, GreenButton } from "./Button"

export default function CarSignUpComponent(props){
    
    const [carLicense, setCarLicense] = useState("")
    const [carAvailableSeats, setCarAvailableSeats] = useState("")
    const [carColor, setCarColor] = useState("")

    function carLicenseChange(e) {
        setCarLicense(e.target.value)
    }
    function carAvailableSeatsChange(e) {
        setCarAvailableSeats(e.target.value)
    }
    function carColorChange(e) {
        setCarColor(e.target.value)
    }

    function clearInput() {
        setCarLicense("")
        setCarAvailableSeats("")
        setCarColor("")
    }


    function uploadCar() {
        const Transport = Parse.Object.extend("Transport");
        const car = new Transport();
        car.set("carLicense", carLicense);
        car.set("carAvailableSeats", carAvailableSeats);
        car.set("carColor", carColor);

        car.save().then((car) => {
            alert('You have added a car ' + car.get("carLicense"));
        }, (error) => {
            alert('Something went wrong ' + error.message);
        });
        
    }

    return(
<div>
    <form className ="create--form">
        <h3> Car Information:</h3>
        <br/>
        <p>License Plate: </p>
                <input
                    onChange={carLicenseChange}
                    value={carLicense}
                    className="create--input"
                    type="text"
                    placeholder="Car License" />

        <p>Available Seats:</p>
                <input
                    onChange={carAvailableSeatsChange}
                    value={carAvailableSeats}
                    className="create--input"
                    type="text"
                    placeholder="Available Seats" />

        <p>Color of car:</p>
                <input
                    onChange={carColorChange}
                    value={carColor}
                    className="create--input"
                    type="text"
                    placeholder="Color of Car" />
    </form>

    <GreenButton className = "car-save" onClick={uploadCar}><ButtonText>Save Car Info</ButtonText></GreenButton>
    </div>
    )
}



