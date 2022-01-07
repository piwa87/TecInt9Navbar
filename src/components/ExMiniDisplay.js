import "./ExMiniDisplay.css";

export default function ExMiniDisplay({ excursionData: ex }) {

    return (
        <div
            className="mini"
            style={{ cursor: "pointer" }}
            onClick={() => alert('Clicking on the component is meant to bring up a window for editing an active excursion, or looking up the deails of a past event.')}
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