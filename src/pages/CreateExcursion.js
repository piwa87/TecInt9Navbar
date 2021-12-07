import { ButtonText, GreenButton, RedButton } from "../components/Button"
import { useEffect, useState } from "react"
import Parse from "parse"

export default function CreateExcursion({ setUser }) {

    useEffect(() => { setUser("org") })

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [deadline, setDeadline] = useState("")
    const [capacity, setCapacity] = useState("")

    function titleChange(e) {
        setTitle(e.target.value)
    }
    function descriptionChange(e) {
        setDescription(e.target.value)
    }
    function dateChange(e) {
        setDate(e.target.value)
    }
    function priceChange(e) {
        setPrice(e.target.value)
    }
    function locationChange(e) {
        setLocation(e.target.value)
    }
    function deadlineChange(e) {
        setDeadline(e.target.value)
    }
    function capacityChange(e) {
        setCapacity(e.target.value)
    }

    function clearInput() {
        setTitle("")
        setDescription("")
        setDate("")
        setPrice("")
        setLocation("")
        setDeadline("")
        setCapacity("")
    }

    function uploadExcursion() {
        const Excursion = Parse.Object.extend("Excursion");
        const excursion = new Excursion();
        excursion.set("title", title);
        excursion.set("description", description);
        excursion.set("date", date);
        excursion.set("price", price);
        excursion.set("location", location);
        excursion.set("capacity", capacity);
        excursion.save().then((excursion) => {
            clearInput();
            alert('Success, your excursion has been created: ' + excursion.get("title") + ' (ID: ' + excursion.id + ')')
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
                    onChange={titleChange}
                    value={title}
                    className="create--input"
                    type="text"
                    placeholder="Title" />

                <p>Description:</p>
                <input
                    onChange={descriptionChange}
                    value={description}
                    className="create--input"
                    type="text"
                    placeholder="Description" />

                <p>Date:</p>
                <input
                    onChange={dateChange}
                    value={date}
                    className="create--input"
                    type="text"
                    placeholder="Date" />

                <p>Price:</p>
                <input
                    onChange={priceChange}
                    value={price}
                    className="create--input"
                    type="number"
                    placeholder="Price (in DKK)" />

                <p>Location:</p>
                <input
                    onChange={locationChange}
                    value={location}
                    className="create--input"
                    type="text"
                    placeholder="Location" />

                <p>Deadline:</p>
                <input
                    onChange={deadlineChange}
                    value={deadline}
                    className="create--input"
                    type="text"
                    placeholder="Deadline" />

                <p>Max. Capacity:</p>
                <input
                    onChange={capacityChange}
                    value={capacity}
                    className="create--input"
                    type="number"
                    placeholder="Max. Capacity" />

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