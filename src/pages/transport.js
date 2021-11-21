import React from "react"
import TransportCard  from "../components/TransportCard"
import transportParticipant from "../tempData/transportParticipants"


const Transport = () => {
    const transportList = transportParticipant.map(item => <TransportCard key={item.tid} par={item}/>)

    return (

        <div className="General">

            <h3>
                Transportation page!
            </h3>
            
            <h3>Here you can find an avaliable seat:</h3> 
            {transportList}
            
        </div>
    )
}

export default Transport