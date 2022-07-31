console.log('hello there!');
// implicit types
var helloWorld = "Hello, world!";
// explicit types
var firstName = "John";
var age = 30;
var x = ["Hello", 10];
// enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
})(Continents || (Continents = {}));
// usage
var region = Continents.Africa;
var user = {
    name: "raka",
    id: 10
};
var windowstate = "Open";
var getLength = function (param) {
    return param.length;
};
getLength('rakaa');
getLength(['raka', 'arkaan']);
