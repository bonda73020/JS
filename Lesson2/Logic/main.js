let x = 1

console.log(`if x = ${x}, we will output ${x!=0}`);

x = 0
console.log(`if x = ${x}, we will output ${x!=0}`);

x = -3
console.log(`if x = ${x}, we will output ${x!=0}`);

console.log("____________________\nTask2:\n")
let time = parseInt(prompt("Введіть час (0-59)"))
console.log(`Введений час: ${time}`)
if (time / 15 < 1){
    console.log("Перша чверть")
}
else{
    if (time / 15 < 2){
        console.log("Друга чверть")
    }
    else{
        if (time / 15 < 3){
            console.log("Третя чверть")
        }
        else{
            console.log("Четверта чверть")
        }
    }
}
console.log("____________________\nTask3:\n")


let nDay = parseInt(prompt("Введіть число місяця"))
console.log(`Введений день: ${nDay}`)
if (nDay / 10 < 1){
    console.log("Перша декада")
}else{
    if (nDay / 10 < 2){
        console.log("Друга декада")
    }else{
        console.log("Третя декада")
    }
}

console.log("____________________\nTask4:\n")

let nDay_oftheweek = parseInt(prompt("Введіть день тижня (1-7)"))
console.log(`Введений день тижня: ${nDay_oftheweek}`)
switch (nDay_oftheweek) {
    case 1:
        console.log("Monday")
        break;

    case 2:
        console.log("Tuesday")
        break;

    case 3:
        console.log("Wednesday")
        break;

    case 4:
        console.log("Thursday")
        break;

    case 5:
        console.log("Friday")
        break;

    case 6:
        console.log("Saturday")
        break;

    case 7:
        console.log("Sunday")
        break;
        }

console.log("____________________\nTask5:\n")

let nA = parseInt(prompt("Введіть перше число"))
let nB = parseInt(prompt("Введіть друге число"))


console.log(`Перше число:${nA}  // Друге число ${nB}`)
if(nA > nB){
    console.log(`Перше число більше: ${nA}`)
}else{
    if(nA < nB){
        console.log(`Друге число більше: ${nB}`)
    }else{
        console.log(`Числа рівні: ${nB} `)
    }
}
console.log("____________________\nTask6:\n")

let a = prompt("Введіть x");
console.log(`х = ${a}`)
a = a || "default";

console.log(`При введеному х отримуємо: ${a}`)

console.log("____________________\nTask7:\n")


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let i in coursesAndDurationArray){
    if(coursesAndDurationArray[i].monthDuration > 5){
        console.log(`Супер, вчимо ${coursesAndDurationArray[i].title} довше 5 місяців`)
    }
}

