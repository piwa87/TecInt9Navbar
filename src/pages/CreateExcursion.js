import { ButtonText, GreenButton, RedButton } from "../components/Button"
import { useEffect, useState } from "react"
import Parse from "parse"

export default function CreateExcursion({ setUser }) {

    useEffect(() => { setUser("org") })

    const [duration, setDuration] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("")
    const [capacity, setCapacity] = useState("")
    const [imgurl, setImgurl] = useState("")

    function durationChange(e) {
        setDuration(e.target.value)
    }
    function dateChange(e) {
        setDate(e.target.value)
    }
    function locationChange(e) {
        setLocation(e.target.value)
    }
    function priceChange(e) {
        setPrice(e.target.value)
    }
    function capacityChange(e) {
        setCapacity(e.target.value)
    }
    function imgurlChange(e) {
        setImgurl(e.target.value)
    }

    function clearInput() {
        setDuration("")
        setDate("")
        setLocation("")
        setPrice("")
        setCapacity("")
        setImgurl("")
    }

    function uploadExcursion() {
        const Excursion = Parse.Object.extend("Excursion");
        const excursion = new Excursion();
        excursion.set("duration", duration);
        excursion.set("date", date);
        excursion.set("location", location);
        excursion.set("price", price);
        excursion.set("capacity", capacity);
        excursion.set("imgurl", imgurl)
        excursion.save().then((excursion) => {
            clearInput();
            alert('Success, your excursion has been created: '
                + location
                + ' (ID: ' + excursion.id + ')')
        }, (error) => {
            alert('Something went wrong ' + error.message);
        });
    }

    return (
        <div>
            <h3>Page for creating excursions:</h3>
            <br />
            <form className="create--form">

                <p>Duration:</p>
                <input
                    onChange={durationChange}
                    value={duration}
                    className="create--input"
                    type="text"
                    placeholder="Duration"
                    required />

                <p>Start date - End date:</p>
                <input
                    onChange={dateChange}
                    value={date}
                    className="create--input"
                    type="text"
                    placeholder="ex. day/month/year - day/month/year"
                    required />

                <p>Location:</p>
                <input
                    onChange={locationChange}
                    value={location}
                    className="create--input"
                    type="text"
                    placeholder="Location"
                    required />

                <p>Price:</p>
                <input
                    onChange={priceChange}
                    value={price}
                    className="create--input"
                    type="number"
                    placeholder="Price (in DKK)"
                    required />

                <p>Max. Capacity:</p>
                <input
                    onChange={capacityChange}
                    value={capacity}
                    className="create--input"
                    type="number"
                    placeholder="Max. Capacity"
                    required />

                <p>Picture:</p>
                <input
                    onChange={imgurlChange}
                    value={imgurl}
                    className="create--input"
                    type="text"
                    placeholder="URL of the title picture"
                    required />

            </form>
            <GreenButton onClick={uploadExcursion}>
                <ButtonText>Create Excursion</ButtonText>
            </GreenButton>
            <RedButton onClick={clearInput}>
                <ButtonText>Cancel</ButtonText>
            </RedButton>
        </div>
    )
}