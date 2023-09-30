document.write("<h2>Task 1:</h2>")

for (let i = 0; i < 10; i += 1) {
    document.write(`<div>div з довільним текстом(лалала)</div>`);
}


document.write("<h2>Task 2:</h2>")

for (let i = 0; i < 10; i += 1) {
    document.write(`<div>div #${i} з довільним текстом(лалала)</div>`);
}


document.write("<h2>Task 3:</h2>");

let task1Counter = 0;
while (task1Counter < 10) {
    document.write(`<div>div з довільним текстом(лалала)</div>`);
    task1Counter += 1;
}

document.write("<h2>Task 4:</h2>");

let task2Counter = 0;
while (task2Counter < 10) {
    document.write(`<div>div #${task2Counter} з довільним текстом(лалала)</div>`);
    task2Counter += 1;
}

document.write("<h2>Task 5:</h2>");
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>")

for (let i in listOfItems){
  document.write(`<li>${listOfItems[i]}</li>`)
}
document.write("</ul>")
document.write("<h2>Task 6:</h2>");

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i in products){
    document.write(`<div className="product-card">`)
    document.write(` <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>`)
    document.write(`<img src="${products[i].image}" alt="" class="product-image">`)
    document.write("</div>")
}

document.write("<h2>Task 7.1:</h2>");

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write("<h4>користувачі зі статусом true</h4>");
document.write("<ul>")
for (let i in users){
    if (users[i].status){
        document.write(`<li>Ім'я:${users[i].name}   вік:${users[i].age}</li>`)
    }
}
document.write("</ul>")

document.write("<h4>користувачі зі статусом false</h4>");

for (let i in users){
    if (!users[i].status){
        document.write(`<li>Ім'я:${users[i].name}   вік:${users[i].age}</li>`)
    }
}


document.write("<h4>користувачі, які старші за 30 років</h4>");

for (let i in users){
    if (users[i].age > 30){
        document.write(`<li>Ім'я:${users[i].name}   вік:${users[i].age}</li>`)
    }
}