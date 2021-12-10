import ExcursionDisplay from '../components/ExcursionDisplay';
import tempExcursionData from '../tempData/excursionDetails';
import '../App.css';
import { useEffect } from 'react';

export default function Excursions({ setUser }) {

	useEffect(() => {setUser("par")})

	const excusrionList = tempExcursionData.map((item) => <ExcursionDisplay key={item.ExcursionId} par={item} />)

	return (
		<section>{excusrionList}</section>
	)
}
