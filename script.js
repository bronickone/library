let myLibrary = [];                  


function Book(title, author, pages, status) {                                  //book consrtuctor            
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    // this.info = function() {
    //     let readOrNot = 'not read yet'
       
    //     if (this.status)  readOrNot = 'read already'
    //     return (`${title} by ${author}, ${pages} pages, ${readOrNot}`)
    //     }
  }
  


   const book1 = new Book('Peace and War', 'Lev Tolstoj', '1000', false)     //some initaial books 
   const book2 = new Book('1984', 'Orwell', '500', true)
   myLibrary.push(book1)
   myLibrary.push(book2)



function addBookToLibrary() {                                              //  add book to library function
      const name = document.querySelectorAll('.book-input')  
    //   let status
    //   name[3].checked ? status = true : status = false; 
      const book = new Book(
          name[0].value, 
          name[1].value, 
          name[2].value, 
          name[3].checked)

      myLibrary.push(book)
  }


const books = document.querySelector('.books')
const addBook = document.querySelector('.add-book')
const newBookButton = document.querySelector('.new-book')  
const addBookButton = document.querySelector('.add-book-button')

newBookButton.addEventListener('click', () => {                         // open new book form button event listener
    addBook.style.display = ('flex')   
})

function formValidation(){
    confPassword.setCustomValidity("Passwords don't match");
}

addBookButton.addEventListener('click', ()=>{                          // submit form button event listener
    addBookToLibrary()
    printLibrary()
    addBook.style.display = ('none')
})



function printLibrary(){                                              // display whole library function( mb need optimization) 
    const booksListBefore = document.querySelector('books-list')
    books.removeChild(booksListBefore)
    
    const booksListAfter = document.createElement('books-list')
    
    for(let unit of myLibrary){                                       //create cards 

        const bookTitle = document.createElement('div')
        const bookAuthor = document.createElement('div')
        const bookPages = document.createElement('div')
        const statusButton = document.createElement('button')
        const removeButton = document.createElement('button')
        
        bookTitle.classList.add('bookTitle')
        bookAuthor.classList.add('bookAuthor')
        bookPages.classList.add('bookPages')
        statusButton.classList.add('statusButton')
        removeButton.classList.add('removeButton')

        bookTitle.textContent = unit.title
        bookAuthor.textContent = 'by ' + unit.author
        bookPages.textContent = unit.pages + ' pages'
        let status = 'NOT READ'
        if (unit.status) status = 'READ'
        statusButton.textContent = status
        removeButton.textContent = 'X'
        


        // paraBook.textContent = (myLibrary.indexOf(unit) + 1) + '. ' + unit.info()
        booksListAfter.appendChild(bookTitle)
        booksListAfter.appendChild(bookAuthor)
        booksListAfter.appendChild(bookPages)
        booksListAfter.appendChild(statusButton)
        booksListAfter.appendChild(removeButton)   
    }

    books.appendChild(booksListAfter)
    removeButtonEvents()
    statusButtonEvents()
}


printLibrary()

// function buttonEvents(buttonsName){                                       //try to create universal buttons function
//     const buttonsName = document.querySelectorAll('.' + `${buttonsName}`)
//     let buttonsArray = Array.from(buttons)
// }



function removeButtonEvents(){                                      //function for create event listeners of remove buttons list
    const removeButtons = document.querySelectorAll('.removeButton')
    let removeButtonsArray = Array.from(removeButtons)

    removeButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
                myLibrary.splice(removeButtonsArray.indexOf(button),1);
                printLibrary()
        });
    });
}

function statusButtonEvents(){                                      //function for create event listeners of status buttons list
    const statusButtons = document.querySelectorAll('.statusButton')
    let statusButtonsArray = Array.from(statusButtons)
    
    statusButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {

                // let localStatus = myLibrary[statusButtonsArray.indexOf(button)].status;
                // localStatus = !(localStatus)
                // myLibrary[statusButtonsArray.indexOf(button)].status = localStatus;
                myLibrary[statusButtonsArray.indexOf(button)].status = 
                !(myLibrary[statusButtonsArray.indexOf(button)].status)
                
                printLibrary()
        });
    });
}

   