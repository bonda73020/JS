let url = "https://jsonplaceholder.typicode.com/users"

let users = []


function add_user_div(usr){
    let p1 = document.createElement("p")
    p1.innerText = "ID: "+usr.id

    let p2 = document.createElement("p")
    p2.innerText = "Name: "+usr.name
    let div = document.createElement("div")

    let button = document.createElement("button")
    a = document.createElement('a')
    a.href = `user-details.html?usr_id=${usr.id}&user_name=${usr.name}`
    button.innerText = `Check ${usr.name}'s page`
    a.append(button)
    div.className = "user-div"
    div.append(p1,p2,a)
    document.getElementById("wraper").append(div)
}


fetch(url)
.then (function (res){
    return res.json()
})
.then (function (info){

    for (let i in info){
        add_user_div(info[i])
    }
})


