import ExcursionDisplay from '../components/ExcursionDisplay';
import tempExcursionData from '../tempData/excursionDetails';
import '../App.css';

export default function Excursions() {
	const excusrionList = tempExcursionData.map((item) => <ExcursionDisplay key={item.ExcursionId} par={item} />)

	return (
		<section>{excusrionList}</section>
	)
}