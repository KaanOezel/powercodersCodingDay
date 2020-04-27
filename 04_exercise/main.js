let bookList = [
    {
        Author: "Author 1",
        Title: "Some Book",
        Price: 19.99,
        isSold: true
    },
    {
        Author: "Author 2",
        Title: "Some Book 2",
        Price: 25.00,
        isSold: true
    },
    {
        Author: "Author 2",
        Title: "Some Book ?",
        Price: 1000.00,
        isSold: false
    }
];


let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("#add-book");
let displayBtn = document.querySelector("#display");
let secondList = document.querySelector("#storeBooks")
let addedBooks = [];
let errormessage = "";




function isInputValid(){
    input.value = input.value.trim();
    if(input.value !== ""){
        for(let i = 0; i < addedBooks.length; i++){
            if(addedBooks[i] === input.value){
                // it is a duplicate
                errormessage = "This book is alreay added";
                return false;
            }
        }
        return true;
    }
    errormessage = "Please give the name of the book"
    return false;
}

function addBooks(){
    if(isInputValid()){
        addedBooks.push(input.value);
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        clearInput();
    } else {
        clearInput();
        alert(errormessage);
    }
}


//function for listing books in my bookList array inside of HTML -  Ofc didnt work -_-
function storeBooks(){
        for(i = 0; i < bookList.length; i++){
            for(prop in bookList[i]){
                let li = document.createElement("li");
                li.innerText = bookList[i][prop];
                secondList.appendChild(li);
            }
        }
}

displayBtn.addEventListener("click", storeBooks);


//======================= end of function=========================



button.addEventListener("click",addBooks);
input.addEventListener("keypress",checkIfReturnKey);

function checkIfReturnKey(event) {
    if(event.keyCode === 13){ //return key
        addBooks();
    }
}


function clearInput(){
    input.value = "";
    input.placeholder ="Anymore books to add?";
    input.focus();
}





// Object Contructor for adding books- Also didnt work!!!!

// function Book(Author, Title, Price, isSold){
//     this.Author = Author;
//     this.Title = Title;
//     this.Price = Price;
//     this.isSold = isSold;
//   }
  
//   let addBook = new Book ("Some Author", "Some Title", 28.00, false);

//   bookList.push("Book") //-_- didnt work

   