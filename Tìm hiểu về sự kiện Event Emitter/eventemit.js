//import module "events"
var sukien = require("events");
var hamchinh = require("util");
//create EventEmiter
var test = new sukien.EventEmitter();
//create express function có thuộc tính name
var Person = function (name) {
  this.name = name;
};
// kế thừa tự lớp Person 
hamchinh.inherits(Person, sukien.EventEmitter);
var a1 = new Person("h1");
var a2 = new Person("h2");
var a3 = new Person("h3");
var people = [a1, a2, a3];
//for each when create that person will say hello guy
people.forEach(function (person) {
  person.on("talk", function (msg) {
    console.log(person.name + " said that " + msg);
  });
});
a2.emit("talk", "hello guy");
//sự kiện nghe
test.on("some things ", function (msg) {
  console.log(msg);
});
//sự kiện nói
test.emit("some things ", "hello all, how are you");
