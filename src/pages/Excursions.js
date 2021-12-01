import Cabin from '../images/cabin.jpg';
import '../App.css';

export default function Excursions() {
	return (
		<div className="show-excursion">
			<h1 >Excursion 2021</h1>
			<img src={Cabin} alt="sweden" width="70%" />
			<p>
				Friday to sunday<strong> June 7-9 2021</strong>
				<br />
				Location: <strong>Vilshult in Småland, SWEDEN</strong>
				<br />
				Price: Adult 950 kr.
				<br />
				Child 475 kr.
			</p>
			<hr />
			<p>
				Join this year’s excursion, there is room for 150 people. 
				So sign up before your colleague </p>

		</div>

	);
};