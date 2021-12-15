import { BiTrash, BiPencil } from "react-icons/bi";
import Parse from "parse";
import { useState } from "react";
import Modal, { setAppElement } from "react-modal";
import { GreenButton, RedButton, ButtonText } from '../components/Button';

export default function SingleParticipant({ par }) {

    const [isOpen, setIsOpen] = useState(false);
    const [parName, setParName] = useState('');

    async function deleteParticipant() {
        const Participant = new Parse.Object('Participant');
        Participant.set('objectId', par.id);
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

    function openModal() {
        setIsOpen(true);
    };

    function afterOpenModal() {
        setParName(par.get("fullname"));
    };

    function closeModal() {
        setIsOpen(false)
    };

    function closeAndDelete() {
        deleteParticipant()
        closeModal()
    };


    return (
        <>
            <div className="participant--single">
                <span>{par.get("fullname")}</span>
                <span>{par.get("preferences")}</span>
                <span>{par.get("age")}</span>
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