// bind()
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {
        console.log(this.name);
    }
}

PrintName.sayHi();
const sayHiToTony = PrintName.sayHi.bind(nameObj);
sayHiToTony();



// call()
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
const fname = person.fullName.call(person2);
console.log(fname);



// apply()
const personObj = {
    fullDetail: function (city, state) {
        return this.firstName + " " + this.lastName + " is from " + city + ", " + state;
    }
}
const person3 = {
    firstName: "John",
    lastName: "Doe"
}


// This will return "John Doe":
const personDetail = personObj.fullDetail.apply(person3, ["Des Plaines", "IL"]);
console.log(personDetail);