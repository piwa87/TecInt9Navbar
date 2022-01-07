import Parse from "parse"

//  Functions for participants

export async function uploadSignUp(signupData, carData) {
    const participant = new Parse.Object("Participant");
    participant.set("fullname", signupData.fullname);
    participant.set("name", signupData.fullname.split(" ")[0]);
    participant.set("birthday", signupData.birthday);
    participant.set("age", getAge(signupData.birthday));
    participant.set("address", signupData.address);
    participant.set("email", signupData.email);
    participant.set("phone", Number(signupData.phone));
    participant.set("pref1", signupData.pref1);
    participant.set("pref2", signupData.pref2);
    participant.set("pref3", signupData.pref3);
    participant.set("carStatus", signupData.carStatus);
    participant.set("numberOfGuests", Number(signupData.noGuests));
    try {
        await participant.save();
        console.log(signupData.fullname + " has been signed up");

        if (signupData.carStatus) {
            const car = new Parse.Object("Car");
            car.set("license", carData.license);
            car.set("color", carData.color);
            car.set("seats", carData.seats);
            car.set('ownerID', participant)
            car.save().then(() => {
                console.log("Car " + carData.license + " added succesfully");
            }, (error) => {
                console.log(`Error: ${JSON.stringify(error)}`);
            });
        }
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    };
};



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
    const excursion = new Parse.Object("Excursion");
    excursion.set("title", data.title);
    excursion.set("description", data.description);
    excursion.set("startDate", data.startDate);
    excursion.set("endDate", data.endDate);
    excursion.set("price", data.price);
    excursion.set("location", data.location);
    excursion.set("deadline", data.deadline);
    excursion.set("capacity", data.capacity);
    excursion.set("imgURL", data.imgURL);
    try {
        await excursion.save();
        alert('Success, your excursion has been created: ' + data.title)
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
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
};

//  Shopping list functions:

export function addShoppingItem(data) {
    const item = new Parse.Object('ShoppingItem');
    item.save(data).then(
        (item) => console.log("New shopping item: " + item.get('item'))
    )
};

export async function fetchShoppingItems() {
    const query = new Parse.Query('ShoppingItem');
    try {
        const results = await query.findAll();
        console.log("Fetched! ###");
        return results.map(obj => {
            return {
                itemID: obj.id,
                item: obj.get('item'),
                quantity: obj.get('quantity'),
                unit: obj.get('unit'),
            }
        });
    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
    }
};

export function destroyShoppingItem(id) {
    const item = new Parse.Object('ShoppingItem');
    item.set('objectId', id);
    item.destroy()
        .then(
            console.log("Deleted shopping item: " + id)
        );
}

//  Other functions:

//  Calculates the age based on the birth date

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export function getDayOfMonth(inputDate) {
    return new Date(inputDate).getDate();
}

export function getMonth(inputDate) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[new Date(inputDate).getMonth()];
}

export function getYear(inputDate) {
    return new Date(inputDate).getFullYear();
}

export function getWeekday(inputDate) {
    switch (new Date(inputDate).getDay()) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "null"
    }
};

