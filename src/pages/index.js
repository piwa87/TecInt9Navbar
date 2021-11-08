import React from "react"
import "../App.css"
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div className="General">
            <h1>Welcome!</h1>
            <h2>Choose your role to continue:</h2>
            
            <Link to="/excursions">Participant</Link><code>[i am working, but please give my some style]</code>
            <hr style={{
						backgroundColor: "black",
						width: 790,
						height: 5,
						marginLeft: "auto",
						marginRight: "auto",
						padding: "40px"
					}}></hr>
            <Link to="/excursions">Organizer</Link><code>[i am working, but please give my some style]</code>
        </div>
    )
}

export default Home