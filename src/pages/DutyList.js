import Parse from "parse"
import { useEffect, useState } from "react";
import { TheGreenButton } from "../components/Button";
import { fetchDuties } from "../api.js"

export default function DutyList({ setUser }) {

    const [data, setData] = useState({ dutyName: "" })
    const [duties, setDuties] = useState([])

    useEffect(() => { setUser("org") })

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            const result = await fetchDuties();
            if (!ignore) setDuties(result.sort());
        }
        fetchData();
        return () => { ignore = true; }
    }, []);

    useEffect(() => {
        console.log("Changed ", duties)
    }, [duties]);

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
        addDuty(data.dutyName);
        setData(prev => {
            return {
                ...prev,
                dutyName: ""
            }
        })
    }

    function addDuty() {
        const Duty = Parse.Object.extend('Duty');
        const duty = new Duty();
        duty.save({
            dutyName: data.dutyName,
        }).then(
            (duty) => {
                console.log("New duty: " + duty.get("dutyName"));
                setDuties(
                    (prevState) => [
                        ...prevState,
                        {
                            dutyID: duty.id,
                            dutyName: duty.get('dutyName')
                        }])
            })
    }

    function deleteDuty(id) {
        setDuties(duties.filter((item) => {
            return item.dutyID !== id
        }))
        const Duty = new Parse.Object('Duty');
        Duty.set('objectId', id);
        Duty.destroy();
    };


    const dutyList = duties.map(item =>
        <li key={item.dutyID}
            onClick={() => deleteDuty(item.dutyID)}
            style={{
                cursor: "pointer"
            }}>
            {item.dutyName}
        </li>
    )

    return (
        <div className="duty-list">
            <h3>Welcome to the duty manager.</h3>
            <br />
            <label htmlFor="addDuty">Here you can add duties for the excursion:</label>
            <form
                id="addDuty"
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