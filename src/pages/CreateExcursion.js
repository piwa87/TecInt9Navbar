import "./001.css"
import { GreenButton, RedButton } from "../components/Button"

export default function CreateExcursion() {
    return (
        <div className="main">
            <h2 className="create">Page for creating excursions:</h2>
            <form className="create--form">
                <p className="create--description">Title:</p> <input className="create--input" type="text" placeholder="Title:" />
                <p className="create--description">Description:</p> <input className="create--input" type="text" placeholder="Description:" />
                <p className="create--description">Date:</p> <input className="create--input" type="text" placeholder="Date:" />
                <p className="create--description">Price:</p> <input className="create--input" type="text" placeholder="Price:" />
                <p className="create--description">Location:</p> <input className="create--input" type="text" placeholder="Location:" />
                <p className="create--description">Deadline:</p> <input className="create--input" type="text" placeholder="Deadline:" />
                <p className="create--description">Max. Capacity:</p> <input className="create--input" type="text" placeholder="Max. Capacity:" />
                <GreenButton>Create Excursion</GreenButton>
                <RedButton>Cancel</RedButton>
            </form>
        </div>
    )
}