const books = [];
function resetForm() {
    [...inputFields].forEach(function (field) {
        if (field.value !== "") {
            field.value = "";
            field.checked = false;
        }


    });
}






function renderBooks(index) {

    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    img.src = "./images-icons/book.jpg";
    div.appendChild(img);

    console.log(books[index]);

    const name = document.createElement("p");
    name.textContent = `Name: ${books[index].name}`;
    div.appendChild(name);

    const author = document.createElement("p");
    author.textContent = `Author: ${books[index].author}`;
    div.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${books[index].pages}`;
    div.appendChild(pages);

    const label = document.createElement("label");
    label.for = "status";
    label.textContent = "Read: ";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "status";
    input.checked=books[index].read;
    label.appendChild(input);

    div.appendChild(label);


    const button = document.createElement("button");
    button.classList.add("buttons")
    button.classList.add("remove");
    button.textContent = "Remove";

    div.appendChild(button);



    console.log(div);

    grid.appendChild(div);

    console.log("added new book!");
    applyListener(button);


}





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





function applyListener(button) {
        button.addEventListener("click", (e) => {
            console.log(e);
            e.target.parentElement.remove()
        })
    }





const grid = document.querySelector(".grid-container");
const modal = document.querySelector("#modal")
const openModal = document.querySelector(".add-book");
const submitModal = document.querySelector("button[type=submit]");
const cancelModal = document.querySelector("button[type=reset]");
const inputFields = document.querySelectorAll("input");

openModal.addEventListener("click", () => {
    modal.showModal();
})


cancelModal.addEventListener("click", () => {
    modal.close();

})

submitModal.addEventListener("click", (e) => {
    e.preventDefault();
    const book = getBookFromInput();
    let index = books.push(book);
    console.log(book);
    console.log(books);
    modal.close();
    renderBooks(index - 1);
    resetForm();

})





