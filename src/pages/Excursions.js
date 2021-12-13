import ExcursionDisplay from '../components/ExcursionDisplay';
import { useEffect, useState } from 'react';
import Parse from "parse"
import '../App.css';

export default function Excursions({ setUser }) {

	useEffect(() => { setUser("par") })

	const [duration, setDuration] = useState("")
	const [date, setDate] = useState("")
	const [location, setLocation] = useState("")
	const [price, setPrice] = useState("")
	const [capacity, setCapacity] = useState("")
	const [imgurl, setImgurl] = useState("")

	useEffect(() => {
		(async () => {
			const Excursion = Parse.Object.extend('Excursion');
			const query = new Parse.Query(Excursion);
			try {
				const results = await query.find();
				for (const object of results) {
					// Access the Parse Object attributes using the .GET method
					setDuration(object.get('duration'))
					setDate(object.get('date'))
					setLocation(object.get('location'))
					setPrice(object.get('price'))
					setCapacity(object.get('capacity'))
					setImgurl(object.get('imgurl'))
				}
			} catch (error) {
				console.error('Error while fetching Excursion', error);
			}
		})();
	}, [])

	if (duration) {
		return (
				< ExcursionDisplay
					img={imgurl}
					duration={duration}
					date={date}
					location={location}
					price={price}
					capacity={capacity} />
		)
	} else {
		return <h3>Unfortunately there are no excursions yet.</h3>
	}
}
