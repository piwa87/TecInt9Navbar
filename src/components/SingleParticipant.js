

export default function SingleParticipant(props) {

    return (
        <div className="single-participant">            
            {props.par.get("name")} | {props.par.get("preference")} | {props.par.get("age")}
        </div>
    )
}