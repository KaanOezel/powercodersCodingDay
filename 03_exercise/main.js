let database = [
    {
        username: "Kaan",
        password: "zzz"
    },
    {
        username: "Delberin",
        password: "Dude"
    }
];

let body = document.querySelector("body");
body.style.visibility = "hidden";

function signIn(){
    let user = prompt("WHO ARE YOU?");
    let pass = prompt("WHAT IS THE PASS?");
    for(i = 0; i < database.length; i++)
    if(user === database[i].username && pass === database[i].password){
        alert("You are the boss!!");
        alert("Hey " + database[i].username + "! Welcome My Dude!");
        let body = document.querySelector("body");
        body.style.visibility = "visible";
        return true;
    }
    alert("YOU DON'T BELONG TO FELLOWSHIP OF DUDES!!!")
    alert("YOU SHALL NOT PASS!!!")
    let body = document.querySelector("body");
    body.style.visibility = "hidden";
    return false; 
}

signIn();