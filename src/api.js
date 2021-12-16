import Parse from "parse"


export async function fetchParticipants() {
    const query = new Parse.Query('Participant');
    try {
        const results = await query.find();
        return results.map(parseObject => {
            return {
                id: parseObject.id,
                fullname: parseObject.get("fullname"),
                preferences: parseObject.get("preferences"),
                age: parseObject.get("age")
            }
        })
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    }
};
