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

    // Modal functionality:

    setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    };

    function afterOpenModal() {
        setParName(par.fullname);
    };

    function closeModal() {
        setIsOpen(false)
    };

    function closeAndDelete() {
        deleteParticipant()
        closeModal()
    };

    const customStyles = {
        content: {
            fontFamily: 'Nunito Sans',
            flexGrow: 1,
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            background: "#cad959",
            border: "1px solid #34401a",
            borderRadius: '8px',
            boxShadow: '5%',
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            transition: "all 0.6s linear"
        },
    };

    return (
        <>
            <div className="participant--single">
                <span>{par.fullname}</span>
                <span>{par.preferences}</span>
                <span>{par.age}</span>
                <BiPencil cursor="pointer" onClick={() => alert("TO DO: Function to edit participant")} />
                <BiTrash cursor="pointer" onClick={openModal} />
            </div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >
                <p>You are about to delete <b>{parName}</b> from this excursion.</p>
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