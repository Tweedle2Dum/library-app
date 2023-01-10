const modal = document.querySelector("#modal")
const openModal = document.querySelector(".add-book");
const closeModal = document.querySelector(".button[type=submit]");

openModal.addEventListener("click",()=>{
    modal.showModal();
})


closeModal.addEventListener("click",()=>{
    modal.closeModal();
})