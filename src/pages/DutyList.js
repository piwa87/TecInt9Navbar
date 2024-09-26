import Parse from 'parse';
import { useEffect, useState } from 'react';
import { TheGreenButton } from '../components/Button';
import { fetchDuties } from '../api.js';
import ExDetails from '../components/ExDetails';

export default function DutyList(props) {
  const { setUser, excursions } = props;
  const [duties, setDuties] = useState([]);
  const [data, setData] = useState({ dutyName: '' });

  useEffect(() => {
    setUser('org');
  });

  useEffect(() => {
    async function fetchData() {
      const result = await fetchDuties();
      setDuties(result.sort());
    }
    fetchData();
    fetchRest();
  }, []);

  async function fetchRest() {
    const rawResponse = await fetch(
      'https://parseapi.back4app.com/classes/Duty/',
      {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'mDBjX2yw6jZOqBzaD7dtM8AtxbUdLcJFqUY9XBxL',
          'X-Parse-REST-API-Key': 'ouMbrbWhs5C5g1La2gwdWDxxyxaTzwplwpPTvdI6',
        },
      }
    );
    const content = await rawResponse.json();
    console.log('Content:', content);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addDuty(data.dutyName);
    setData((prev) => {
      return {
        ...prev,
        dutyName: '',
      };
    });
  }

  function addDuty() {
    const duty = new Parse.Object('Duty');
    duty
      .save({
        dutyName: data.dutyName,
      })
      .then((duty) => {
        console.log('New duty: ' + duty.get('dutyName'));
        setDuties((prevState) => [
          ...prevState,
          {
            dutyID: duty.id,
            dutyName: duty.get('dutyName'),
          },
        ]);
      });
  }

  function deleteDuty(id) {
    setDuties(
      duties.filter((item) => {
        return item.dutyID !== id;
      })
    );
    const Duty = new Parse.Object('Duty');
    Duty.set('objectId', id);
    Duty.destroy();
  }

  const dutyList = duties.map((item) => (
    <li
      key={item.dutyID}
      onClick={() => deleteDuty(item.dutyID)}
      style={{
        cursor: 'pointer',
      }}
    >
      {item.dutyName}
    </li>
  ));

  return (
    <div className="duty-list">
      <h3>Duty list:</h3>
      {excursions[excursions.length - 1] === undefined ? (
        <></>
      ) : (
        <ExDetails excursion={excursions[excursions.length - 1]} />
      )}
      <br />
      <label htmlFor="addDuty">
        Here you can add duties for the excursion:
      </label>
      <form onSubmit={handleSubmit}>
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
  );
}
