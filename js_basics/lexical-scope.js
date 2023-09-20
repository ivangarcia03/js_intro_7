



// bind()

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "Steve",
    sayHi: function () {
        console.log(this.name)
    }
}

PrintName.sayHi();
const sayHiBind = PrintName.sayHi.bind(nameObj);
sayHiBind();


// call()

const person = {
    fullName: function() {
        return this.first.Name + " " + this.lastName
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}