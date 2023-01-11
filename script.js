//Reset's the form to an empty state (used while submission)
function resetForm() {
    [...inputFields].forEach(function (field) {
        if (field.value !== "") {
            field.value = "";
            field.checked = false;
        }


    });
}


//Create's the Card, and applies Event Listener to the Remove Button
function renderBooks(index) {

    const div = document.createElement("div");
    div.classList.add("card");
    //Created the img tag and appended it to div
    const img = document.createElement("img");
    img.src = "./images-icons/book.jpg";
    div.appendChild(img);

    console.log(books[index]);
    //Created p tag for name
    const name = document.createElement("p");
    name.textContent = `Name: ${books[index].name}`;
    div.appendChild(name);

    //Created p tag for author
    const author = document.createElement("p");
    author.textContent = `Author: ${books[index].author}`;
    div.appendChild(author);

    //Created p tag for pages
    const pages = document.createElement("p");
    pages.textContent = `Pages: ${books[index].pages}`;
    div.appendChild(pages);

    //Created label tag
    const label = document.createElement("label");
    label.for = "status";
    label.textContent = "Read: ";
    //Created input tag
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "status";
    input.checked=books[index].read;
    label.appendChild(input);

    div.appendChild(label);

    //Created the button and applied event listener to it
    const button = document.createElement("button");
    button.classList.add("buttons")
    button.classList.add("remove");
    button.textContent = "Remove";
    applyListener(button);
    div.appendChild(button);

    console.log(div);

    //added the card "div" to the grid
    grid.appendChild(div);

    console.log("added new book!");
    


}

//Get's user input from the input fields of the form
function getBookFromInput() {
    let author = document.querySelector("input#author").value;
    let name = document.querySelector("input#name").value;
    let pages = document.querySelector("input#pages").value;
    let read = document.querySelector("input#form-status").checked;

    console.log("Book object created!!");

    return {
        author, name, pages, read
    }
}

//Applies Event Listener to Remove Button on card when called inside renderBooks()
function applyListener(button) {
        button.addEventListener("click", (e) => {
            console.log(e);
            e.target.parentElement.remove()
        })
    }




const books = [];
//Selected the necessary DOM elements
const grid = document.querySelector(".grid-container");
const modal = document.querySelector("#modal")
const openModal = document.querySelector(".add-book");
const submitModal = document.querySelector("button[type=submit]");
const cancelModal = document.querySelector("button[type=reset]");
const inputFields = document.querySelectorAll("input");



//Adding Event Listener's to DOM elements
openModal.addEventListener("click", () => {
    modal.showModal();
})


cancelModal.addEventListener("click", () => {
    modal.close();

})

submitModal.addEventListener("click", (e) => {
    e.preventDefault();
    const book = getBookFromInput();
    let index = books.push(book);//Got the index of the array and later decreased 1 to get index
    console.log(book);
    console.log(books);
    modal.close();
    renderBooks(index - 1);//decrement index
    resetForm();

})





