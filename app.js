var employee = {
    name: "Tejaswini",
    age: 23,
    city: "Bangalore",
    bloodGroup: "O+ve",

    aboutMe : function(){
        console.log(`Hey! My name is ${this.age}!`);
    }
}

employee.aboutMe();

