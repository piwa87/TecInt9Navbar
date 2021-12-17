import { ButtonText, GreenButton, RedButton } from "../components/Button"
import { useEffect, useState } from "react"
import Parse from "parse"
import { useNavigate } from "react-router-dom"

export default function CreateExcursion({ setUser }) {

    useEffect(() => { setUser("org") })

    const navigate = useNavigate();
    const tempURL = "https://faktalink.dk/sites/default/files/styles/top_image/public/2019-02/ikea_faktalink_20181121-163410-L-1920x1248we.jpg?itok=xsn9RKmg"

    const [excursionData, setExcursionData] = useState({
        title: "",
        date: "",
        location: "",
        price: "",
        capacity: "",
        imgURL: tempURL
    })

    function handleChange(e) {
        const { name, value } = e.target
        setExcursionData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        uploadExcursion();
        navigate('/home');
    };

    function resetExcursionData() {
        setExcursionData({
            title: "",
            date: "",
            location: "",
            price: "",
            capacity: "",
            imgURL: ""
        })
    }

    async function uploadExcursion() {
        const Excursion = Parse.Object.extend("Excursion");
        const excursion = new Excursion();
        excursion.set("title", excursionData.title);
        excursion.set("date", excursionData.date);
        excursion.set("location", excursionData.location);
        excursion.set("price", excursionData.price);
        excursion.set("capacity", excursionData.capacity);
        excursion.set("imgurl", excursionData.imgURL)
        try {
            await excursion.save();
            alert('Success, your excursion has been created: ' + excursionData.title)
        } catch (error) {
            alert(`Error ${error.message}`);
        };
    };

    console.log(excursionData);

    return (
        <div>
            <h3>Fill out the form to create an excursion:</h3>
            <br />
            <form
                id="excForm"
                className="create--form"
                onSubmit={handleSubmit}>

                <p>Title:</p>
                <input
                    className="create--input"
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                    value={excursionData.title}
                    required="required"
                />

                <p>Date:</p>
                <input
                    className="create--input"
                    type="date"
                    placeholder="dd-mm-yyyy-dd"
                    onChange={handleChange}
                    name="date"
                    value={excursionData.date}
                    required="required"
                />

                <p>Location:</p>
                <input
                    className="create--input"
                    type="text"
                    placeholder="Locationa"
                    onChange={handleChange}
                    name="location"
                    value={excursionData.location}
                    required="required"
                />

                <p>Price:</p>
                <input
                    className="create--input"
                    type="number"
                    placeholder="Price (in DKK)"
                    onChange={handleChange}
                    name="price"
                    value={excursionData.price}
                    min="100"
                    required="required"
                />

                <p>Max. Capacity:</p>
                <input
                    className="create--input"
                    type="number"
                    placeholder="Max. Capacity"
                    onChange={handleChange}
                    name="capacity"
                    value={excursionData.capacity}
                    required="required"
                />

                <p>Picture:</p>
                <input
                    className="create--input"
                    type="url"
                    placeholder="URL of the title picture"
                    onChange={handleChange}
                    name="imgURL"
                    value={tempURL}
                />

                <GreenButton>
                    <ButtonText>Create Excursion</ButtonText>
                </GreenButton>
            </form>
            <RedButton onClick={resetExcursionData}>
                <ButtonText>Cancel</ButtonText>
            </RedButton>
        </div >
    )
}