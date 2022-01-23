import { useEffect, useState } from "react";
import { TheGreenButton } from "../components/Button";
import { fetchAllDuties, addDutyByRest, deleteDutyByIdRest } from "../api.js"
import ExDetails from "../components/ExDetails";
import SingleDuty from "../components/SingleDuty";
import Parse from "parse"


import Modal, { setAppElement } from "react-modal";
import { RedButton, GreyButton } from '../components/Button';


export default function DutyList({ setUser, excursions }) {

    const [duties, setDuties] = useState([]);
    const [data, setData] = useState({
        excID: "",
        dutyName: "",
        boss: "",
        par1: "",
        par2: ""
    });
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState("");
    const [modalNames, setModalNames] = useState([]);

    console.log("Data:", data);

    useEffect(() => { setUser("org") })

    useEffect(() => {
        async function fetchData() {
            const result = await fetchAllDuties();
            setDuties(result.sort());
        }
        fetchData();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target
        setData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        addDuty(data.dutyName, excursions[0].id);
        setData(prev => {
            return {
                ...prev,
                dutyName: ""
            }
        })
    }

    async function addDuty(name, excID) {
        console.log("Duties:", duties);
        const dutyID = await addDutyByRest(name, excID);
        setDuties((prevState) => [
            ...prevState,
            {
                dutyID: dutyID,
                excID: excID,
                dutyName: name
            }])
    }

    function deleteDuty(id) {
        setDuties(duties.filter((item) => {
            return item.dutyID !== id
        }))
        deleteDutyByIdRest(id)
    };

    async function getNamesByDuty(duty) {
        const query1 = new Parse.Query('Participant');
        query1.contains('pref1', duty)
        const query2 = new Parse.Query('Participant');
        query2.contains('pref2', duty)
        const query3 = new Parse.Query('Participant');
        query3.contains('pref3', duty)
        const composedQuery = Parse.Query.or(query1, query2, query3)
        const result = await composedQuery.findAll();
        const namesForDuty = result.map(item => item.get('name'))
        // console.log(`Names for duty '${duty}': `, result);
        // console.log(lst);
        return namesForDuty;
    }

    // Modal functionality:

    setAppElement('#root');

    async function openModal(dutyName) {
        setIsOpen(true);
        setModalData(dutyName);
        
    };

    async function afterOpenModal(dutyName) {
        const names = await getNamesByDuty(dutyName);
        setModalNames(names)
        console.log("Names:", modalNames);
    };

    function closeModal() {
        setIsOpen(false);
    };

    function closeAndDelete() {
        closeModal();
    };

    const thisModalStyle = {
        content: {
            fontFamily: 'Nunito Sans',
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, 90%)',
            background: "#cad959",
            border: "1px solid #34401a",
            borderRadius: '8px',
            boxShadow: '5%',
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            transition: "all 0.6s linear"
        },
    };


    const listOfDuties = duties.map(
        (item) =>
            <SingleDuty key={item.dutyID} duty={item} deleteDuty={deleteDuty} openModal={openModal} />
    )

    return (
        <div className="duty-list">
            <h3>Duty list:</h3>
            {(excursions[excursions.length - 1] === undefined) ? <></> : <ExDetails excursion={excursions[excursions.length - 1]} />}
            <br />

            Here you can add duties for the excursion:
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Duty Name"
                    onChange={handleChange}
                    name="dutyName"
                    value={data.dutyName}
                    required="required"
                />
                <TheGreenButton>Add Duty</TheGreenButton>
            </form>
            <br />

            <section className="duty-list-container">
                <section className="duty-list-header">
                    <b>Duties:</b><b>Names:</b>

                </section>
                {listOfDuties}
            </section>

            <Modal
                isOpen={isOpen}
                onAfterOpen={()=> afterOpenModal(modalData)}
                onRequestClose={closeModal}
                style={thisModalStyle}
                contentLabel="Example Modal">
                Duty:
                <input type="text" value={modalData} readOnly />
                <br />
                Boss:
                <select size="1">
                    <option value="<none>">-- Show volunteers --</option>
                    {modalNames.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
                Participant #1:
                <select size="1">
                    <option value="<none>">-- Show volunteers --</option>
                    {modalNames.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
                Participant #2:
                <select size="1">
                    <option value="<none>">-- Show volunteers --</option>
                    {modalNames.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
                <br />
                <RedButton onClick={closeAndDelete}>Delete</RedButton>
                <GreyButton onClick={closeModal}>Cancel</GreyButton>
            </Modal>
        </div>
    )
}