console.log('hello there!')

// implicit types
let helloWorld = "Hello, world!";

// explicit types
let firstName: string = "John";
let age: number = 30;

// tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hello", 10];

// enums
enum Continents {
    North_America,
    South_America,
    Africa,
    Asia,
    Europe
}

// usage
const region = Continents.Africa

// interface
interface User {
    name: string,
    id: number
}

const user: User = {
    name: "raka",
    id: 10
}

// compose types -> union
type windowState = "Open" | "Closed" | "Minimized";
type lockState = "locked" | "unlocked";

const windowstate: windowState = "Open";

const getLength = (param: string | string[])=>{
    return param.length;
}

getLength('rakaa');
getLength(['raka', 'arkaan']);
