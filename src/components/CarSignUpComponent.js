
export default function CarSignUpComponent({ setCarData }) {

    function handleChange(e) {
        const { name, value } = e.target;
        setCarData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    return (
        <>
            License Plate:
            <input
                type="text"
                placeholder="Car License"
                onChange={handleChange}
                name="license"
            />

            Available Seats:
            <input
                type="text"
                placeholder="Available Seats"
                onChange={handleChange}
                name="seats"
            />

            Color of car:
            <input
                type="text"
                placeholder="Color of Car"
                onChange={handleChange}
                name="color"
            />
            
            <p> </p><p> </p>
        </>
    )
}