import Parse from "parse"
import { useEffect, useState } from "react";
import { ButtonText, TheGreenButton } from "../components/Button";

export default function DutyList({ setUser }) {

    useEffect(() => { setUser("org") })

    const [data, setData] = useState(
        {
            dutyName: "",
        }
    )

    const [duties, setDuties] = useState([])

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
        addDuty()
        setData(prev => {
            return {
                ...prev,
                dutyName: ""
            }
        })
    }

    async function addDuty() {
        const Duty = Parse.Object.extend('Duty');
        const duty = new Duty();
        duty.set('name', data.dutyName);
        try {
            await duty.save();
            loadDuties()
        } catch (error) {
            alert(`Error ${error.message}`);
        };
    };

    async function loadDuties() {
        const query = new Parse.Query('Duty');
        try {
            const res = await query.findAll();
            setDuties(res)
        } catch (error) {
            console.log(`Error: ${JSON.stringify(error)}`);
        };
    };

    async function deleteDuty(id) {
        const Duty = new Parse.Object('Duty');
        Duty.set('objectId', id);
        try {
            await Duty.destroy();
            loadDuties();
        } catch (error) {
            alert(`Error ${error.message}`);
        };
    };

    useEffect(() => {
        loadDuties();
    }, []);

    const dutyList = duties.map(d =>
        <li key={d.id}
            onClick={() => deleteDuty(d.id)}
            style={{
                cursor: "pointer"
            }}>
            {d.get('name')}
        </li>
    )

    return (
        <div className="duty-list">
            <h3>Welcome to the duty manager.</h3>
            <br />
            <label htmlFor="addDuty">Here you can add duties for the excursion:</label>
            <form
                id="addDuty"
                className="duty-input"
                onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Duty Name"
                    onChange={handleChange}
                    name="dutyName"
                    value={data.dutyName}
                    required="required"
                />
                <br />
                <TheGreenButton>Add Duty</TheGreenButton>
            </form>
            <br />
            <h4>Current list of duties:</h4>
            <ul>{dutyList}</ul>
        </div>
    )
}