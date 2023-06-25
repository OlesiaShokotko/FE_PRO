// Задан массив users с первоначальными данными:
let users = [ 
{id: 1, name: 'Steven', salary: '5000'}, 
{id: 2, name: 'Neena', salary: '10000'}, 
{id: 3, name: 'John', salary: '4500'} 
]

// Напишите 3 функции, которые будут менять этот массив: 
// Функция addUser(name, salary). Функция должна добавить нового пользователя как последний элемент в массив users. Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)
// Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users
// Функция changeUser(id, name, salary). Функция должна по id найти заданный элемент и переопределить значение name и salary на значение, указанные в аргументе в момент вызова

// Примечание: 
// Все функции должны менять исходный массив users
// Необходимо реализовать обработку случая, если в функции передать неизвестный id (реализовать процесс на ваше усмотрение). Будет достаточно реализовать сообщение об ошибке в консоли.
// В приложенном результате продемонстрировать вызовы всех функции на произвольных примерах.

function addUser(name, salary){
    let counter = users.length;
    counter++;
    let newUser = {
        id: counter,
        name: name,
        salary: salary
    };
    users.push(newUser);
    return users;
}
console.log(addUser('Anna', '5000'))
console.log(users)

function removeUser(id) {
    if(users.some(el => el.id === id)) {
    let filteredUsers = users.filter(el => el.id !== id);
    newUsers = users;
    users = filteredUsers;
    return users;
    }
    throw new Error("This id doesn`t exist.");
}
console.log(removeUser(2))
console.log(users)

function changeUser(id, name, salary){
    if(users.some(el => el.id === id)) {
    let foundElement = users.find(el => el.id === id)
    foundElement.name = name
    foundElement.salary = salary
    return foundElement;
    }
    throw new Error("This id doesn`t exist.");
}
console.log(changeUser(1, "Stefan", "2000"))
console.log(users)
