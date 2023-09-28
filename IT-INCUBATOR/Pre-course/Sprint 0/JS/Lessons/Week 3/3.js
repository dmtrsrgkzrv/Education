// DESCRIPTION:
// Выведи только тех юзеров у кого id не больше 2. Используй тот же массив

// SOLUTION:
const users = [
    {
        id: 1,
        name: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        name: 'Jane',
        surName: 'Smith',
        address: '456 Elm St'
    },
    {
        id: 3,
        name: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    }
];

const result = users.filter(element => element.id <= 2);
console.log(result);