let array = [   
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },

  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },

  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];


//N:  taskin cavabi bu deyil. ☠

let newArr= array.map((el)  => {
    let obj={
        id:el.id,
        name:el.name,
        username:el.username
    }
    return obj;
})


//N:  ✅
 
const getUserName= (name) => {
  let foundObject = array.find((element) =>{
   return element.name === name
  })
  return foundObject
}

console.log(getUserName("Leanne Graham"))
