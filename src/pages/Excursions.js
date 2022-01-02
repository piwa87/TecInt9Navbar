import ExcursionDisplay from '../components/ExcursionDisplay';
import { useEffect, useState } from 'react';
import { fetchExcursions } from '../api';

export default function Excursions({ setUser }) {

	const [excursions, setExcursions] = useState([])

	useEffect(() => { setUser("par") })

	useEffect(() => {
		async function fetchData() {
			const result = await fetchExcursions();
			setExcursions(result)
		}
		fetchData();
	}, []);

	return <ExcursionDisplay ex={excursions[excursions.length - 1]} />
}