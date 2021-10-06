interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function(): string{
        return `${this.name}, ${this.year}, ${this.broken}`
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.name}, ${vehicle.year}, ${vehicle.broken}`);
};

printVehicle(oldCivic);