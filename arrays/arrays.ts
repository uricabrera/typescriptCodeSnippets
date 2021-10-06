const carMakers:string[] = ["ford","toyota","chevy"];
const dates = [new Date(),new Date()];

const carsByMake: string[][] = [
    ["f150"],
    ["corolla"],
    ["camaro"]
];


// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

// carMakers.push(100); ----> Will give an error

// Lot of help with "map", "forEach", "reduce"

carMakers.map((car:string):string => {
    return car.toUpperCase();
})

// Flexible types

const importantDates: (string | Date)[] = [new Date(),"2030-10-10"];
importantDates.push("qjwowqjejo");
// importantDates.push(100) ----> Would give an error