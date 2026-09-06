const response = await fetch('http://localhost:3000/characters/naruto', {
    method: 'GET',
    headers: {
        "Content-Type" : "application/json",
    },
})

const task = await response.json();
console.log(task);