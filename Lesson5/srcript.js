document.write("<h2>Task 1 (Площа прямокутника)</h2>")

let area_rectangle = (a,b) => a*b


document.write(`<h3>a = 4, b = 3 || S = ${area_rectangle(4,3)}</h3>`)


document.write("<h2>Task 2 (Площа кола)</h2>")

let area_circle = (r) => Math.PI*(r**2)

document.write(`<h3>r = 5 || S = ${area_circle(5)}</h3>`)


document.write("<h2>Task 3 (Об'єм циліндра)</h2>")

let volume_cylinder = (h,r) => Math.PI*(r**2)*h
document.write(`<h3>h = 3, r = 5 || V = ${volume_cylinder(3,5)}</h3>`)


document.write("<h2>Task 4 (Вивід масиву)</h2>")
document.write("<h3>тестовий масив A = [0, 1, 2, 3, 4, 5, 6]</h3>")

let show_array = (A) =>{
    document.write("<ul>")
    for (let i in A){
        document.write(`<li><h3>A[${i}] : ${A[i]}</h3></li>`)
    }
    document.write("</ul>")
}

show_array([0,1,2,3,4,5,6])

document.write("<h2>Task 5 (Створення параграфу)</h2>")

document.write("<h3>Аргумент: Лалала</h3>")

let new_paragraph = (s) => {
    document.write(`<p>${s}</p>`)
}

new_paragraph("Лалала")


document.write("<h2>Task 6 (Створення списку (без визначення кількості))</h2>")
document.write("<h3>Аргумент: елемент списку</h3>")
let list1 = (s) =>{
    document.write("<ul>")
    document.write(`<li><h3>${s}</h3></li>`)
    document.write(`<li><h3>${s}</h3></li>`)
    document.write(`<li><h3>${s}</h3></li>`)
    document.write("</ul>")
}

list1("елемент списку")


document.write("<h2>Task 7 (Створення списку (визначення кількості))</h2>")
document.write("<h3>Аргументи: елемент списку, 5</h3>")
let list2 = (s,n)=>{
    document.write("<ul>")
    for (let i = 0; i<n;i+=1) {
        document.write(`<li><h3>${s}</h3></li>`)
    }
    document.write("</ul>")
}

list2("елемент списку",5)

document.write("<h2>Task 8 (Створення списку з масиву примітивних елементів)</h2>")
document.write(`<h3>Аргумент: [0, 1, 2, "3", "4", true, false]</h3>`)
let list3 = (A) =>{
    document.write("<ul>")
    for (let i in A) {
        document.write(`<li><h3>${A[i]}</h3></li>`)
    }
    document.write("</ul>")
}

list3([0, 1, 2, "3", "4", true, false])


document.write("<h2>Task 9 (Вивід об'єкту)</h2>")
let test_list = [
    {id: 4654, name:"Micheal Scott",age:36},
    {id: 147, name:"Dwight Schrute",age:29},
    {id: 978, name:"Jim Halpert",age:30},
    {id: 132, name:"Pam Beesly ",age:28},
]

let object_output = (A)=>{
    for (let i in A){
        document.write("<div><h4>-----------</h4><ul>")
        document.write(`<li><h3>Name: ${A[i].name}</h3></li>`)
        document.write(`<li><h3>ID: ${A[i].id}</h3></li>`)
        document.write(`<li><h3>Age: ${A[i].age}</h3></li>`)
        document.write("</ul><h4>-----------</h4></div>")
    }
}

object_output(test_list)

document.write("<h2>Task 10 (Пошук найменшого числа у масиві)</h2>")
document.write(`<h3>Масив: [55,21,12,35,84,10]</h3>`)

let min_number=(A)=>{
    let min_val = A[0]
    for (let i  = 1;i<A.length;i++){
        if (A[i] < min_val){min_val = A[i]}
    }
    return min_val
}

document.write(`<h3>Найменше число: ${min_number([55,21,12,35,84,10])}</h3>`)

document.write("<h2>Task 11 (Сума елементів масиву)</h2>")
document.write(`<h3>Масив: [55,21,12,35,84,10]</h3>`)

let sum_array=(A)=>{
    let sum = 0
    for (let i in A){
        sum+=A[i]
    }
    return sum
}

document.write(`<h3>Сума елементів: ${sum_array([55,21,12,35,84,10])}</h3>`)

document.write("<h2>Task 12 (Поміняти місцями елементи масиву)</h2>")
let test_list2 = [1, 2, 3, 4, 5]
document.write(`<h3>Масив до: [${test_list2}], аргументи: 2, 3</h3>`)

let swap_array=(A,i,j)=>{
    let z = A[i];
    A[i] = A[j];
    A[j] = z;
}
swap_array(test_list2,2,3)
document.write(`<h3>Масив після: [${test_list2}]`)

document.write("<h2>Task 12 (Обмін валют)</h2>")

document.write(`<h3>Аргументи: 100500, PLN</h3>`)


let exchange=(n,s)=>{
    let A = [
        {currency: 'USD', value: 37.01},
        {currency: 'EUR', value: 39.18},
        {currency: 'PLN', value: 8.46},
        {currency: 'CHF', value: 40.42},
        {currency: 'GBP', value: 45.14},
        {currency: 'BTC', value: 997799.33}
    ];

    let check = false;
    let exchangedAmount = 0;

    for (let i = 0; i < A.length; i++) {
        if (s === A[i].currency) {
            exchangedAmount = n / A[i].value;
            check = true;
        }
    }

    if (!check) {
        return "Немає такої валюти";
    }

    return exchangedAmount.toFixed(2);
}
document.write(`<h3>${exchange(100500,"PLN")}</h3>`)