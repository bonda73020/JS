let a1 = [1,2,3,"4","5","6","7","8",true,false]

console.log(a1)


let book1 = {
    title: "Fifty shades of grey",
    pageCount: 514,
    genre: "Erotic"
};


let book2 = {
    title: "Looking for alaska",
    pageCount: 272,
    genre: "young adult novel"
};

let book3 = {
    title: "The Hound of the Baskervilles",
    pageCount: 200,
    genre: "Detective novel"
};



let book4 = {
   title: "FunnyBook",
   pageCount: 420,
   genre:"Comedy",
   authors:[
       {name:"Funny man 1",
       age:42},
       {name:"Funny man 2",
           age:69}
   ]
}

let book5 = {
    title: "SadBook",
    pageCount: 240,
    genre:"Drama",
    authors:[
        {name:"Sad man 1",
            age:41},
        {name:"Sad man 2",
            age:61}
    ]
}

let book6 = {
    title: "SmartBook",
    pageCount: 999,
    genre:"Popular science",
    authors:[
        {name:"Smart man 1",
            age:31.14},
        {name:"Smart man 2",
            age:15.92}
    ]
}



let a2 = [
    {
        name:"user0",
        username:"user_000",
        password:"imthecoolestuser000",
    },
    {
        name:"user1",
        username:"user_111",
        password:"imthecoolestuser111",
    },
    {
        name:"user1",
        username:"user_111",
        password:"imthecoolestuser111",
    },
    {
        name:"user2",
        username:"user_222",
        password:"imthecoolestuser222",
    },
    {
        name:"user3",
        username:"user_333",
        password:"imthecoolestuser333",
    },
    {
        name:"user4",
        username:"user_444",
        password:"imthecoolestuser444",
    },
    {
        name:"user5",
        username:"user_555",
        password:"imthecoolestuser555",
    },
    {
        name:"user6",
        username:"user_666",
        password:"imthecoolestuser666",
    },
    {
        name:"user7",
        username:"user_777",
        password:"imthecoolestuser777",
    },
    {
        name:"user8",
        username:"user_888",
        password:"imthecoolestuser888",
    },
    {
        name:"user9",
        username:"user_999",
        password:"imthecoolestuser999",
    },

]

for (var i = 0; i < a2.length; i++) {
    console.log(`For user with username ${a2[i].username} password is ${a2[i].password}`);
}



