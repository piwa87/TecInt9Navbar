import ExcursionDisplay from '../components/ExcursionDisplay';
import { useEffect, useState } from 'react';
import Parse from "parse"
import '../App.css';
import { ButtonText, GreenButton } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Excursions(props) {

	const navigate = useNavigate();
	// useEffect(() => { setUser("par") })

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
			// You can also query by using a parameter of an object
			// query.equalTo('objectId', 'xKue915KBG');
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

	console.log("User from App: " + props.user);

	if (duration) {
		return (
			(props.user === "par") ? (
				< ExcursionDisplay
					img={imgurl}
					duration={duration}
					date={date}
					location={location}
					price={price}
					capacity={capacity} />)
				: (
					<>
						<h3>No excursions yet.</h3>
						<GreenButton>
							<ButtonText onClick={() => navigate("/createExcursion")}>
								Create Excursion
							</ButtonText>
						</GreenButton>
					</>
				)
		)
	} else {
		return <h3>Unfortunately there are no excursions yet.</h3>
	}
}
