import { BiTrash, BiPencil } from "react-icons/bi"

export default function SingleParticipant(props) {

    return (
        <div className="participant--single">
            <span>{props.par.get("fullname")}</span>
            <span>{props.par.get("preferences")}</span>
            <span>{props.par.get("age")}</span>
            <BiPencil cursor="pointer" onClick={() => alert("TO DO: Function to edit participant")}/>
            <BiTrash cursor="pointer" onClick={() => alert("TO DO: Function to delete participant")} />
        </div>
    )
}