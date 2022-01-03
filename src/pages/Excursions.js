import ExcursionDisplay from '../components/ExcursionDisplay';
import { useEffect } from 'react';
import { Icon } from '@iconify/react'

export default function Excursions({ setUser, excursions }) {

	const currentExcursion = excursions[excursions.length - 1];
	// const pastExcursions = excursions.slice(0, -1)

	useEffect(() => { setUser("par") })

	return (currentExcursion === undefined) ?
		<section className="no-excursion">
			<h3>Unforunately there are no excursions yet...</h3>
			<br />
			<Icon icon="et:sad" color="#555" width="190" height="190" />
		</section>
		:
		<ExcursionDisplay excursionData={currentExcursion} />
}