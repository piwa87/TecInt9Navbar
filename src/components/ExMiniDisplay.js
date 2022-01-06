import "./ExMiniDisplay.css";

export default function ExMiniDisplay({ excursionData: ex }) {

    return (
        <div
            className="mini"
            style={{ cursor: "pointer" }}
            onClick={() => alert('Edit me!')}
        >
            <img alt="" className="mini-image" src={ex.imgURL} /><span></span>
            <section className="mini-data">
                Dates:<b>{ex.startDate} - {ex.endDate}</b>
                Location: <b>{ex.location}</b>
                Price: <b>{ex.price} Kr.</b>
                Deadline for signup: <b>{ex.deadline}</b>
            </section>
        </div>
    )
}