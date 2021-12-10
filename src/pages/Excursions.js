import ExcursionDisplay from '../components/ExcursionDisplay';
import { useEffect, useState } from 'react';
import Parse from "parse"
import '../App.css';

export default function Excursions({ setUser }) {

	useEffect(() => { setUser("par") }, [])
	const [exc, setExc] = useState(new Parse.Object('Excursion'))
	const [any, setAny] = useState(false)

	async function fetch() {
		let query = new Parse.Query('Excursion');
		let queryResult = await query.findAll();
		const currentExc = queryResult[0];
		setExc(currentExc)
	}

	useEffect(() => {
		fetch();
	}, [exc])


	if (any) {
		return (
			< ExcursionDisplay
				img={exc.get('imgurl')}
				duration={exc.get('duration')}
				date={exc.get('date')}
				location={exc.get('location')}
				price={exc.get('price')}
				capacity={exc.get('capacity')} />
		)
	} else {
		return <>Nic nie ma</>
	}

	// return (
	// 		{any ? (
	// 			< ExcursionDisplay
	// 				img={exc.get('imgurl')}
	// 				duration={exc.get('duration')}
	// 				date={exc.get('date')}
	// 				location={exc.get('location')}
	// 				price={exc.get('price')}
	// 				capacity={exc.get('capacity')} />
	// 		) : (<>No</>)
	// 		}
	// )
}
