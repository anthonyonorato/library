let removeBtns = document.querySelectorAll('#removeBtn')
let statusBtns = document.querySelectorAll('#statusBtn');

const form = document.querySelector('#addBookForm');

const addBookBtn = document.querySelector('#addBookBtn');

const overlay = document.querySelector('.overlay');
const formContainer = document.querySelector('.formContainer');

const booksDisplay = document.querySelector('#booksDisplay');

// Store the "new" book objects into an array.

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevents form from submitting

  let submittedTitle = e.target[0].value
  let submittedAuthor = e.target[1].value
  let submittedPages = e.target[2].value
  let submittedIsRead = e.target[3].checked

  let div = document.createElement("div");
  div.setAttribute("class", "bookCard");

  let newTitle = document.createElement("p");
  let newAuthor = document.createElement("p");
  let newPages = document.createElement("p");

  let statusBtn = document.createElement("button");
  let removeBtn = document.createElement("button");
  