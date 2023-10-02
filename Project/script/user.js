let params = new URLSearchParams(window.location.search);
let userId = params.get("usr_id")
let user_name = params.get("user_name")
let url = "https://jsonplaceholder.typicode.com/users/"

let show_posts = false


let back_button = document.createElement("button")
let back_a = document.createElement('a')
back_a.href = "index.html"
back_a.append(back_button)
back_button.className = 'button'
back_button.innerText = "Back"
document.getElementById("wraper").append(back_a)

function add_element(key,value,tabs){
    let newElement = document.createElement("pre")
    newElement.innerText = "\t".repeat(tabs)+`${key} : `
    if (typeof value != "object"){
        newElement.innerText += `${value}`
        document.getElementById("wraper").append(newElement)
    }
    else{
        document.getElementById("wraper").append(newElement)
        let keys_ = Object.keys(value)
        for (let i in keys_){
            add_element(keys_[i],value[keys_[i]],tabs+1)
        }
    }

}

function toggle_posts (info){
    console.log(info)
    if (!show_posts){
        let div = document.createElement("div")
        for (let i in info){
            let div2 = document.createElement("div")
            let div3 = document.createElement('div')
            div3.innerText = info[i].title
            div3.className = "post_title"
            let a = document.createElement('a')
            a.href = `post-details.html?post_id=${info[i].id}&user_id=${userId}&user_name=${user_name}`
            let but = document.createElement('button')
            but.innerText = "View post"
            a.append(but)
            div2.append(div3,a)
            div.id = "posts_div"
            div.append(div2)
        }
        document.getElementById("wraper").append(div)
    }
    else{
        document.getElementById("posts_div").remove()
    }
show_posts = !show_posts
}



fetch(url+userId)
    .then (function (res){
        return res.json()
    })
    .then (function (info){

        let h = document.createElement("h1")
        h.innerText = `${info.name}'s profile card`
        document.getElementById("wraper").append(h)
        let keys = Object.keys(info)
        for (let i in keys){
            add_element(keys[i],info[keys[i]],0)
        }
    })
.then(function (){
    let posts_url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    fetch(posts_url)
        .then (function (res){
            return res.json()
        })
        .then (function (info){
            let main_b = document.createElement("button")
            main_b.className = "button"
            main_b.innerText = "View posts"
            main_b.addEventListener("click", function() {
                toggle_posts(info)
            })
            document.getElementById("wraper").append(main_b)

        })
})