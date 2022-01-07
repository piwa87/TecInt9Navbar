import { BiTrash, BiPencil } from "react-icons/bi";
import { useState } from "react";
import Modal, { setAppElement } from "react-modal";
import { RedButton, GreyButton } from '../components/Button';

export default function SingleParticipant({ par, deleteParticipant }) {

    const [isOpen, setIsOpen] = useState(false);
    const [parName, setParName] = useState('');

    // Modal functionality:

    setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    };

    function afterOpenModal() {
        setParName(par.fullname);
    };

    function closeModal() {
        setIsOpen(false);
    };

    function closeAndDelete() {
        deleteParticipant(par.id);
        closeModal();
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
            <div className="participant-single">
                <span>{par.fullname}</span>
                <span>{par.pref1}, {par.pref2}, {par.pref3}</span>
                <span>{par.age}</span>
                <BiPencil cursor="pointer" onClick={() => alert("This would open a window showing all data about the participant and allowing the edit it")} />
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
                <RedButton onClick={closeAndDelete}>Delete</RedButton>
                <GreyButton onClick={closeModal}>Cancel</GreyButton>
            </Modal>
        </>
    )
}