document.write("<h2>Task 1</h2>")
let s1:string =  'hello world'
let s2:string = 'lorem ipsum'
let s3:string = 'javascript is cool'
function show (A:string[]):void{
    for (let i in A){
        document.write(`<h3>The length of "${A[i]}" is ${A[i].length}</h3>`);
    }
}
show([s1,s2,s3])



document.write("<br><br><h2>Task 2</h2>")
function uppercase_func (A:string[]):void{
    for (let i in A){
        document.write(`<h3>Original string: "${A[i]}" || Modified string: "${A[i].toUpperCase()}"</h3>`);
    }
}
uppercase_func([s1,s2,s3])



document.write("<br><br><h2>Task 3</h2>")
s1 = s1.toUpperCase()
s2 = s2.toUpperCase()
s3 = s3.toUpperCase()
function lower_func (A:string[]):void{
    for (let i in A){
        document.write(`<h3>Original string: "${A[i]}" || Modified string: "${A[i].toLowerCase()}"</h3>`);
    }
}
lower_func([s1,s2,s3])
document.write("<br><br><h2>Task 4</h2>")
let str:string = ' dirty string   '
document.write(`<h3>Original string: "${str}" || Modified string: "${str.trim()}"</h3>`);


document.write("<br><br><h2>Task 5</h2>")
function stringToarray(s:string):string[]{
    return s.split(' ')
}

document.write(`<h3>Original string: "Хіба ревуть воли як ясла повні" || Result: [${stringToarray("Хіба ревуть воли як ясла повні")}]`);


document.write("<br><br><h2>Task 6</h2>")

let array_task6:number[] =  [10,8,-7,55,987,-1011,0,1050,0]
let new_array_task6:string[]

document.write(`<h3>Original array: [${array_task6}]</h3>`)
new_array_task6 = array_task6.map(i=>i.toString())
document.write(`<h3>Modified array: [${new_array_task6.map(i=>`"${i}"`)}]</h3>`)

document.write("<br><br><h2>Task 7</h2>")

function sortNums(A: number[], s: string): number[] {
    for (let i = A.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (s === 'descending') {
                if (A[j] < A[j + 1]) {
                    [A[j], A[j + 1]] = [A[j + 1], A[j]];
                }
            } else {
                if (A[j] > A[j + 1]) {
                    [A[j], A[j + 1]] = [A[j + 1], A[j]];
                }
            }
        }
    }
    return A;
}


let array_task7:number[] = [5,2,3,7,0,8]

document.write(`<h3>Original array: [${array_task7}]</h3>`)
document.write(`<h3>ascending: [${sortNums(array_task7,"ascending")}]</h3>`)
document.write(`<h3>descending: [${sortNums(array_task7,"descending")}]</h3>`)

document.write("<br><br><h2>Task 8</h2>")

interface Icourses{
    title:string;
    monthDuration:number
    id?:number
}

let coursesAndDurationArray:Icourses[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


function array_outp(A:Icourses[]):string{

    let ss:string= '{\n'
    for (let i in A){
        ss+=`title: ${A[i].title}, monthDuration: ${A[i].monthDuration};\n`
    }
    return ss+"}"
}

document.write(`<h3><pre>Original array:\n${array_outp(coursesAndDurationArray)}<pre></h3>`)
function sort_courses(A:Icourses[]):void{
    for(let i = A.length;i>0;i--){
        for(let j = 0;j<i-1;j++){
            if (A[j].monthDuration < A[j+1].monthDuration){
                [A[j],A[j+1]] = [A[j+1],A[j]]
            }
        }
    }
}
sort_courses(coursesAndDurationArray)
document.write(`<h3><pre>Sotred array:\n${array_outp(coursesAndDurationArray)}<pre></h3>`)

function filter_courses(A:Icourses[]):void{
    let i:number = -1;
    do {i+=1}
    while(A[i].monthDuration>=5)
    A.splice(i)
}
filter_courses(coursesAndDurationArray)
document.write(`<h3><pre>Filtered array:\n${array_outp(coursesAndDurationArray)}<pre></h3>`)
coursesAndDurationArray.map( i => i.id=coursesAndDurationArray.indexOf(i))

function array_outp_with_id(A:Icourses[]):string{

    let ss:string= '{\n'
    for (let i in A){
        ss+=`id:${A[i].id}, title: ${A[i].title}, monthDuration: ${A[i].monthDuration};\n`
    }
    return ss+"}"
}

document.write(`<h3><pre>Modified array:\n${array_outp_with_id(coursesAndDurationArray)}<pre></h3>`)