let myLibrary = [

    {
        author:"meow",
        title:"woof",
        pages:123,
        read:true  
    },
    {
        author:"hello",
        title:"world",
        pages:234,
        read:false  
    }
];

const Book = function(author,title,pages,read){



    return {
        author,
        title,
        pages,
        read

    }
}




function addBookToLibrary(){

    myLibrary.append(Book)
}



