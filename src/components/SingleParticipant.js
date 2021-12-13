import { BiTrash, BiPencil } from "react-icons/bi"
import Parse from "parse"

export default function SingleParticipant(props) {

    const pid = props.par.id;

    async function deleteParticipant() {
        const Participant = new Parse.Object('Participant');
        Participant.set('objectId', pid);
        try {
            await Participant.destroy();
            alert('Success! Participant removed!');
            window.location.reload();
            return true;
        } catch (error) {
            alert(`Error ${error.message}`);
            return false;
        };
    };

    return (
        <div className="participant--single">
            <span>{props.par.get("fullname")}</span>
            <span>{props.par.get("preferences")}</span>
            <span>{props.par.get("age")}</span>
            <BiPencil cursor="pointer" onClick={() => alert("TO DO: Function to edit participant")} />
            <BiTrash cursor="pointer" onClick={(pid) => deleteParticipant(pid)} />
        </div>
    )
}