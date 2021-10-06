interface Reportable {
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

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary():string{
        return `My drink has ${this.sugar} mg of sugar`
    }
}


const printReportable = (reportable: Reportable): void => {
    console.log(reportable.summary());
};

printReportable(oldCivic);
printReportable(drink);