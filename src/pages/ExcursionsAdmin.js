import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TheGreenButton } from '../components/Button';
import ExMiniDisplay from '../components/ExMiniDisplay';

export default function ExcursionsAdmin({ setUser, excursions }) {

    useEffect(() => { setUser("org") })

    const navigate = useNavigate();
    const currentExcursion = excursions[excursions.length - 1];
    const pastExcursions = excursions.slice(0, -1).map(
        (item) =>
            <ExMiniDisplay key={item.id} excursionData={item} />
    )

    console.log("Past:", pastExcursions);

    return (currentExcursion === undefined) ?
        <section className="no-excursion">
            <h3>No excursions yet</h3>
            <br />
            <br />
            <TheGreenButton onClick={() => navigate('/createExcursion')}>Create excursion</TheGreenButton>
        </section>
        :
        <section className='just-margin'>
            <section>
                <p><b>Next excursion:</b></p>
                <ExMiniDisplay excursionData={currentExcursion} />
                <TheGreenButton onClick={() => navigate('/createExcursion')}>Create new excursion</TheGreenButton>
            </section>
            <hr />
            <section>
                <p><b>Archive:</b></p>
                {pastExcursions}
            </section>
        </section>
}