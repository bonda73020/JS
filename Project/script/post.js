let params = new URLSearchParams(window.location.search);
let postId = params.get("post_id")
let userId = params.get("user_id")
let user_name = params.get("user_name")

let url_post = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
let url_coments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

let back_button = document.createElement("button")
let back_a = document.createElement('a')
back_a.href = `user-details.html?usr_id=${userId}&user_name=${user_name}`
back_a.append(back_button)
back_button.className = 'button'
back_button.innerText = "Back"
document.getElementById("wraper").append(back_a)


function fill_post_info(info){
    let div = document.createElement("div")
    div.id = "post_info"
    let targ_post = info[info.findIndex(obj => obj.id == postId)]
    let a_user = document.createElement("a")
    a_user.href = `user-details.html?usr_id=${userId}&user_name=${user_name}`
    let h1 = document.createElement("h1")
    h1.innerText = user_name
    let p1 = document.createElement("p")
    p1.innerText = `userId: ${targ_post.userId}`
    a_user.append(h1,p1)

    h2 = document.createElement("h2")
    h2.innerText = targ_post.title

    let div_body = document.createElement("div")
    div_body.id = "post_body"
    div_body.innerText = targ_post.body
    let p2 = document.createElement("p")
    p2.id = "post_id"
    p2.innerText = `postID: ${targ_post.id}`
    div.append(a_user,h2,div_body,p2)
    document.getElementById("wraper").append(div)
}

function fill_comments(info){

    let main_comments_div = document.createElement("div")
    main_comments_div.className = "main_comments_div"


    for (let i in info){
        let comment_div = document.createElement('div')
        comment_div.className = "comment_div"
        let h3 = document.createElement('h3')
        h3.innerText = info[i].name
        let p1 = document.createElement("p")
        p1.className = "comment_email"
        p1.innerText = info[i].email
        let p2 =  document.createElement("p")
        let div2 = document.createElement("div")
        div2.className = "comment_body"
        div2.innerText = info[i].body
        let p3 = document.createElement("p")
        p3.className = "comment_id"
        p3.innerText = `commentID: ${info[i].id}`
        comment_div.append(h3,p1,div2,p3)
        main_comments_div.append(comment_div)

    }
    document.getElementById("wraper").append(main_comments_div)
}

fetch(url_post)
    .then (function (res){
        return res.json()
    })
    .then (function (info){
        fill_post_info(info)
    })
    .then(function (){
    })
    .then(function (){
        fetch(url_coments)
            .then (function (res){
                return res.json()
            })
            .then (function (info){
                fill_comments(info)
            })
    })

