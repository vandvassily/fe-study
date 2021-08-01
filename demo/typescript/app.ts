function greeter(person: Person): string {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'lily', lastName: 'ZHAO' };

function prints(person: Person) {
    console.log(person.firstName);
}

document.body.innerHTML = greeter(user);
prints(user);

interface Person {
    firstName: string;
    lastName: string;
}
