const books = [{Name:"meow meow 1",Author:"woof",Pages:69,Read:true},
{Name:"meow meow 2",Author:"woof",Pages:69,Read:true},
{Name:"meow meow 3",Author:"woof",Pages:69,Read:true},
{Name:"meow meow 4",Author:"woof",Pages:69,Read:true}]

function resetForm(){
    [...inputFields].forEach(function(field){
        if (field.value!=="" ){
            field.value="";
            field.checked=false;
        }
        

    });
}


const modal = document.querySelector("#modal")
const openModal = document.querySelector(".add-book");
const submitModal = document.querySelector("button[type=submit]");
const cancelModal = document.querySelector("button[type=reset]");
const inputFields = document.querySelectorAll("input");

openModal.addEventListener("click",()=>{
    modal.showModal();
})


cancelModal.addEventListener("click",()=>{
    modal.close();
    
})

submitModal.addEventListener("click",(e)=>{
    e.preventDefault();
    
    resetForm();
    modal.close();
    
    


})


