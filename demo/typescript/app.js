function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'lily', lastName: 'ZHAO' };
function prints(person) {
    console.log(person.firstName);
}
document.body.innerHTML = greeter(user);
prints(user);
