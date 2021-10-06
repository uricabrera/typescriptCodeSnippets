class Vehicle{

    constructor(public color:string){
    }


    protected honk(): void {
        console.log("Beep!");
    }
}

class Car extends Vehicle {
    constructor(color:string,public wheels:number){
        super(color);
    }
    private drive(): void{
        console.log("Vrooom!");
    }

    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
}


const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car("brown",2);
car.startDrivingProcess();