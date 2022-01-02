import { TheGreenButton, RedButton } from "../components/Button"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { uploadExcursion } from "../api"

export default function CreateExcursion({ setUser }) {

    useEffect(() => { setUser("org") })

    const navigate = useNavigate();

    const [excursionData, setExcursionData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        price: "",
        location: "",
        deadline: "",
        capacity: "",
        imgURL: "",
    })

    console.log(excursionData);

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
        uploadExcursion(excursionData);
        navigate('/home');
    };

    function resetExcursionData() {
        setExcursionData({
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            price: "",
            location: "",
            deadline: "",
            capacity: "",
            imgURL: "",
        })
    }

    return (
        <div className="create-ex">
            <h3>Create Excursion:</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <section className="create-form">

                    Title:
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={handleChange}
                        name="title"
                        value={excursionData.title}
                        required="required"
                    />

                    Description:
                    <textarea
                        type="textarea"
                        placeholder="Description"
                        onChange={handleChange}
                        name="description"
                        value={excursionData.description}
                    />
                </section>

                <section className="create-form-date">
                    Start Date:
                    <input
                        type="date"
                        onChange={handleChange}
                        name="startDate"
                        value={excursionData.startDate}
                        required="required"
                        max={Date(excursionData.endDate)}
                    />

                    &emsp;&emsp;&emsp;&emsp;
                    End Date:
                    <input
                        type="date"
                        onChange={handleChange}
                        name="endDate"
                        value={excursionData.endDate}
                        required="required"
                        min={excursionData.startDate}
                    />
                </section>

                <section className="create-form">
                    Price:
                    <input
                        type="number"
                        placeholder="Price (in DKK)"
                        onChange={handleChange}
                        name="price"
                        value={excursionData.price}
                        min="100"
                        required="required"
                    />

                    Location:
                    <input
                        type="text"
                        placeholder="Location"
                        onChange={handleChange}
                        name="location"
                        value={excursionData.location}
                        required="required"
                    />

                    Deadline:
                    <input
                        type="date"
                        onChange={handleChange}
                        name="deadline"
                        value={excursionData.deadline}
                        required="required"
                        style={{
                            width: "96px",
                        }}
                    />


                    Max. Capacity:
                    <input
                        type="number"
                        placeholder="Max. Capacity"
                        onChange={handleChange}
                        name="capacity"
                        value={excursionData.capacity}
                        required="required"
                    />

                    Picture:
                    <input
                        type="url"
                        placeholder="URL of the title picture"
                        onChange={handleChange}
                        name="imgURL"
                        value={excursionData.imgURL}
                    />
                    <section className="create-ex-buttons">
                        <TheGreenButton onClick={handleSubmit}>Create Excursion</TheGreenButton>
                        <RedButton onClick={() => resetExcursionData()}>Cancel</RedButton>
                    </section>
                </section>
            </form>
        </div >
    )
}