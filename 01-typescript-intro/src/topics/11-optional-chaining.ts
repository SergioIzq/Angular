export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Sergio',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Gabriel']
};

const printChildren = (passenger: Passenger) => {

    const { name, children } = passenger;

    console.log(name, children?.length || 0);
}

const printChildrenNumber = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;

    return howManyChildren;
}

printChildren(passenger1);
printChildren(passenger2);

printChildrenNumber(passenger1);
printChildrenNumber(passenger2);