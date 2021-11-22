
export default function Navbar() {

    const user = "o"

    return (
        <div className="navbar">

            {(user === "p") && (
                <>
                    <a href="/excursions">Excursion</a>
                    <a href="/transport">Transportation</a>
                    <a href="/contact">Contact</a>
                    <a href="/signup">Sign up</a>
                    <a href="/Home">Log Out</a>
                </>
            )}
            {(user === "o") && (
                <>
                    <a href="/excursions">Excursion</a>
                    <a href="/participantList">Participant List</a>
                    <a href="/dutyList">Duty List</a>
                    <a href="/shoppingList">Shopping List</a>
                    <a href="/Home">Log Out</a>
                </>
            )}
        </div>

    )
}