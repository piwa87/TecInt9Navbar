import Parse from "parse"



export async function fetchParticipants() {
    const query = new Parse.Query('Participant');
    try {
        const results = await query.find();
        return results.map(parseObject => {
            return {
                id: parseObject.id,
                fullname: parseObject.get("fullname"),
                pref1: parseObject.get("pref1"),
                pref2: parseObject.get("pref2"),
                pref3: parseObject.get("pref3"),
                age: parseObject.get("age")
            }
        })
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    }
};

//  Funtion for duties:

export async function fetchDuties() {
    const query = new Parse.Query('Duty');
    try {
        const results = await query.findAll();
        return results.map( obj => {
            return {
                dutyID: obj.id,
                dutyName: obj.get('dutyName')
            }
        })
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    }
};