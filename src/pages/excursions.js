import Cabin from '../images/cabin.jpg';
import '../App.css';

export default function Excursions() {
	return (
		<div className='Container'
			style={{
				backgroundColor: '#B4BF5E',
				marginTop: '-21px',
				marginLeft: '282px',
				marginRight: '282px',
				height: '180vh'
			}}>
			<h1 className='about_h1' style={{
				textAlign: "center",
				paddingTop: 50
			}}>Excursion 2021</h1>


			<div className='first-collumn-image'>
				<img src={Cabin}
					alt="sweden"
					style={{
						justifyContent: "center",
						position: "absolute",
						width: "50%",
						height: "50%",
						left: "402px",
						top: "257px",
						alignItems: 'center'
					}}
				/>

			</div>
			<div className='info'>
				<p
					style={{
						fontWeight: 300,
						fontFamily: "STIXVariants",
						paddingTop: 500,
						textAlign: "center",
						fontSize: 28
					}}
				>
					Friday to sunday<strong> June 7-9 2021</strong><br />Location: <strong>Vilshult in Småland, SWEDEN</strong><br />Price: Adult 950 kr.<br />  Child 475 kr.


				</p>
			</div>
			<div className='line'>
				<hr
					style={{
						backgroundColor: "black",
						width: 790,
						height: 5,
						marginLeft: "auto",
						marginRight: "auto",
						border: 0
					}}
				/>

			</div>

			<div className='join'>
				<p
					style={{
						fontWeight: 300,
						fontFamily: "STIXVariants",
						paddingTop: 15,
						textAlign: "center",
						fontSize: 28,
						position: "static",

					}}
				>
					Join this year’s excursion, there is room for 150 people. So sign up before your colleague </p>
			</div>
		</div>

	);
};