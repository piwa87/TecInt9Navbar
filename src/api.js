import Parse from "parse"

//  Functions for participants

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

//  Function for duties:

export async function fetchDuties() {
    const query = new Parse.Query('Duty');
    try {
        const results = await query.findAll();
        return results.map(obj => {
            return {
                dutyID: obj.id,
                dutyName: obj.get('dutyName')
            }
        })
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    }
};

//  Functions for excursions:

export async function uploadExcursion(data) {
    const Excursion = Parse.Object.extend("Excursion");
    const excursion = new Excursion();
    excursion.set("title", data.title);
    excursion.set("description", data.description);
    excursion.set("startDate", data.startDate);
    excursion.set("endDate", data.endDate);
    excursion.set("price", data.price);
    excursion.set("location", data.location);
    excursion.set("deadline", data.deadline);
    excursion.set("capacity", data.capacity);
    excursion.set("imgURL", data.imgURL)
    try {
        await excursion.save();
        alert('Success, your excursion has been created: ' + data.title)
    } catch (error) {
        alert(`Error ${error.message}`);
    };
};

export async function fetchExcursions() {
    const query = new Parse.Query('Excursion');
    try {
        const results = await query.find();
        return results.map(obj => {
            return {
                id: obj.id,
                title: obj.get('title'),
                description: obj.get('description'),
                startDate: obj.get('startDate'),
                endDate: obj.get('endDate'),
                price: obj.get('price'),
                location: obj.get('location'),
                deadline: obj.get('deadline'),
                capacity: obj.get('capacity'),
                imgURL: obj.get('imgURL'),
            }
        })
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    }
}