import { BiTrash, BiPencil } from "react-icons/bi"

export default function SingleParticipant(props) {

    return (
        <div className="participant--single">
            <span>{props.par.get("name")}</span>
            <span>{props.par.get("preference")}</span>
            <span>{props.par.get("age")}</span>
            <BiPencil />
            <BiTrash />
        </div>
    )
}