import { BiTrash, BiPencil } from "react-icons/bi";
import Parse from "parse";
import { useState } from "react";
import Modal, { setAppElement } from "react-modal";
import { GreenButton, RedButton, ButtonText } from '../components/Button';

export default function SingleParticipant(props) {

    const pid = props.par.id;

    async function deleteParticipant() {
        const Participant = new Parse.Object('Participant');
        Participant.set('objectId', pid);
        try {
            await Participant.destroy();
            window.location.reload();
        } catch (error) {
            alert(`Error ${error.message}`);
        };
    };

    // Modal tryout:

    setAppElement('#root');

    const customStyles = {
        content: {
            fontFamily: 'STIXVariants',
            flexGrow: 1,
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            background: "#cad959",
            borderRadius: '8px',
            boxShadow: '5%',
        },
        overlay: {
            backgroundColor: "transparent",
        },
    };

    const [isOpen, setIsOpen] = useState(false);
    const [parName, setParName] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        console.log("Name:" + props.par.get("fullname"));
        setParName(props.par.get("fullname"));
    }

    function closeModal() {
        setIsOpen(false)
    }

    function closeAndDelete() {
        deleteParticipant()
        setIsOpen(false)
    }


    return (
        <>
            <div className="participant--single">
                <span>{props.par.get("fullname")}</span>
                <span>{props.par.get("preferences")}</span>
                <span>{props.par.get("age")}</span>
                <BiPencil cursor="pointer" onClick={() => alert("TO DO: Function to edit participant")} />
                <BiTrash cursor="pointer" onClick={openModal} />
            </div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >
                <h3>You are about to delete <b>{parName}</b> from this excursion.</h3>
                <p>Are you sure?</p>
                <GreenButton onClick={closeAndDelete}>
                    <ButtonText>Delete</ButtonText>
                </GreenButton>
                <RedButton onClick={closeModal}>
                    <ButtonText>Cancel</ButtonText>
                </RedButton>
            </Modal>
        </>
    )
}