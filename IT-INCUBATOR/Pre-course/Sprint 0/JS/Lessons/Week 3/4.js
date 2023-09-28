// DESCRIPTION:
// При помощи map поменяйте "JS" на 'I like JS"

// SOLUTION:
const tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]

console.log(tasks.map(element => element.id === 2 ? {...element, title: "I like JS"} : element));