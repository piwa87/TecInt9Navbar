import { useEffect, useState } from "react";
import { TheGreenButton, GreyButton } from "../components/Button";
import { fetchAllDuties, addDutyByRest, deleteDutyByIdRest } from "../api.js"
import ExDetails from "../components/ExDetails";
import SingleDuty from "../components/SingleDuty";
import Parse from "parse"
import Modal, { setAppElement } from "react-modal";


export default function DutyList({ setUser, excursions }) {

    const [duties, setDuties] = useState([]);
    const [data, setData] = useState({
        dutyID: "",
        excID: "",
        dutyName: "",
        boss: "",
        par1: "",
        par2: ""
    });

    // Modal useStates:

    const [isOpen, setIsOpen] = useState(false);
    const [dutyForModal, setDutyForModal] = useState("");
    const [idForModal, setidForModal] = useState("");
    const [namesForModal, setNamesForModal] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => { setUser("org") })

    useEffect(() => {
        async function fetchData() {
            const result = await fetchAllDuties();
            setDuties(result.sort());
        }
        fetchData();
        console.log("Fetched duties from server!");
    }, [trigger]);

    function handleChange(e) {
        const { name, value } = e.target;
        setData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
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
        return namesForDuty;
    }

    async function updateDutyManning(id, boss, par1, par2) {
        const query = new Parse.Query('Duty');
        try {
            const object = await query.get(id);
            object.set('boss', boss);
            object.set('par1', par1);
            object.set('par2', par2);
            try {
                const response = await object.save();
                console.log(response.get('boss'));
                console.log(response.get('par1'));
                console.log(response.get('par2'));
                console.log('Duty updated', response);
                // alert('Duty updated!')
                setTrigger(prevState => !prevState);
            } catch (error) {
                console.error('Error while updating Duty', error);
            }
        } catch (error) {
            console.error('Error while retrieving object Duty', error);
        }
    }

    // Modal functionality:

    setAppElement('#root');

    async function openModal(dutyName, dutyID) {
        setIsOpen(true);
        setDutyForModal(dutyName);
        const names = await getNamesByDuty(dutyName);
        setNamesForModal(names);
        setidForModal(dutyID);
        console.log(`Name is ${dutyName} and ID is ${dutyID}`);
    };

    function closeModal() {
        setIsOpen(false);
    };

    function closeAndDelete() {
        updateDutyManning(idForModal, data.boss, data.par1, data.par2);
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
            width: '250px',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(45%, -30%)',
            background: "#cad959",
            border: "1px solid #34401a",
            borderRadius: '8px',
            boxShadow: '5%',
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            transition: "all 0.6s linear"
        },
    };


    const listOfDuties = duties.map(item =>
        <SingleDuty
            key={item.dutyID}
            duty={item}
            deleteDuty={deleteDuty}
            openModal={openModal}
        />)

    return (
        <div className="duty-list">
            <h3>Duty list:</h3>
            {(excursions[excursions.length - 1] === undefined)
                ?
                <></>
                :
                <ExDetails excursion={excursions[excursions.length - 1]} />}
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
                onRequestClose={closeModal}
                style={thisModalStyle}
            >
                Duty:
                <input type="text" value={dutyForModal} readOnly />
                <br />
                Boss:
                <select size="1"
                    onChange={handleChange}
                    name="boss"
                    value={data.boss} >
                    <option value="">-- Show volunteers --</option>
                    {namesForModal.map(name => <option key={name} value={name}>{name}</option>)}
                    <option value="[TBC]">[TBC]</option>
                </select>
                Participant #1:
                <select size="1"
                    onChange={handleChange}
                    name="par1"
                    value={data.par1} >
                    <option value="">-- Show volunteers --</option>
                    {namesForModal.map(name => <option key={name} value={name}>{name}</option>)}
                    <option value="[TBC]">[TBC]</option>
                </select>
                Participant #2:
                <select size="1"
                    onChange={handleChange}
                    name="par2"
                    value={data.par2} >
                    <option value="">-- Show volunteers --</option>
                    {namesForModal.map(name => <option key={name} value={name}>{name}</option>)}
                    <option value="[TBC]">[TBC]</option>
                </select>
                <br />
                <TheGreenButton onClick={closeAndDelete}>Save Changes</TheGreenButton>
                <GreyButton onClick={closeModal}>Exit</GreyButton>
            </Modal>
        </div>
    )
}