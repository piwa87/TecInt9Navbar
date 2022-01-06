import { getMonth, getDayOfMonth, getYear } from "../api"

export default function ExDetails( {excursion} ) {

    return (
        <section className="ex-details">
            <b>
            {excursion.title}&emsp;|&emsp;
            {getMonth(excursion.endDate)}&ensp;{getDayOfMonth(excursion.startDate)}-{getDayOfMonth(excursion.endDate)}&ensp;{getYear(excursion.endDate)}
            </b>
        </section>
    )
}