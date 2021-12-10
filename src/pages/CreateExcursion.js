import { ButtonText, GreenButton, RedButton } from "../components/Button"
import { useEffect, useState } from "react"
import Parse from "parse"
import { useNavigate } from "react-router-dom"

export default function CreateExcursion({ setUser }) {

    useEffect(() => { setUser("org") })

    const navigate = useNavigate();

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
        excursion.save().then(() => {
            clearInput();
            alert('Success, your excursion has been created: ' + duration)
            navigate('/home')
            window.location.reload()
        }, (error) => {
            alert('Something went wrong ' + error.message);
        });
    }

    return (
        <div>
            <h3>Page for creating excursions:</h3>
            <br />
            <form className="create--form">

                <p>Title:</p>
                <input
                    onChange={durationChange}
                    value={duration}
                    className="create--input"
                    type="text"
                    placeholder="Title"
                    required />

                <p>Date:</p>
                <input
                    onChange={dateChange}
                    value={date}
                    className="create--input"
                    type="text"
                    placeholder="ex ' 7 - 9 Februar 2021 '"
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
        </div >
    )
}