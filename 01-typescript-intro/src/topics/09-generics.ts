
export function whatsMyType<T>(argument: T): T {
    return argument;
}

const amISting = whatsMyType<string>('Hola mundo!');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
const amIObject = whatsMyType<object>({ name: 'Juan', age: 30 });
const amIUndefined = whatsMyType<undefined>(undefined);
const amINull = whatsMyType<null>(null);

console.log(amISting.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
console.log(amIObject);
console.log(amIUndefined);
console.log(amINull);