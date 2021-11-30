import "./create-excursion.css"
import { ButtonText, GreenButton, RedButton } from "../components/Button"

export default function CreateExcursion() {
    return (
        <div>
            <h3>Page for creating excursions:</h3>
            <br />
            <form className="create--form">
                <p className="create--description">Title:</p>
                <input className="create--input" type="text" placeholder="Title:" />
                <p className="create--description">Description:</p>
                <input className="create--input" type="text" placeholder="Description:" />
                <p className="create--description">Date:</p>
                <input className="create--input" type="text" placeholder="Date:" />
                <p className="create--description">Price:</p>
                <input className="create--input" type="text" placeholder="Price:" />
                <p className="create--description">Location:</p>
                <input className="create--input" type="text" placeholder="Location:" />
                <p className="create--description">Deadline:</p>
                <input className="create--input" type="text" placeholder="Deadline:" />
                <p className="create--description">Max. Capacity:</p>
                <input className="create--input" type="text" placeholder="Max. Capacity:" />
            </form>
            <GreenButton><ButtonText>Create Excursion</ButtonText></GreenButton>
            <RedButton><ButtonText>Cancel</ButtonText></RedButton>
        </div>
    )
}