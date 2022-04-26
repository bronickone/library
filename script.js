let myLibrary = [];                  

//book consrtuctor     

function Book(title, author, pages, status) {                                         
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
  }

//   Book.prototype.toggleStatus = function() {
//     this.status = (!this.status)  
//   }

  //some initaial books 

   const book1 = new Book('Kobzar', 'Taras Shevchenko', '300', false)     
   const book2 = new Book('1984', 'George Orwell', '500', true)
   myLibrary.push(book1)
   myLibrary.push(book2)


  //  add book to library function
  const bookInput = document.querySelectorAll('.book-input')

function addBookToLibrary() {                                              
      
      const book = new Book(
        bookInput[0].value, 
        bookInput[1].value, 
        bookInput[2].value, 
        bookInput[3].checked)
        myLibrary.push(book)
  }


const books = document.querySelector('.books')
const addBook = document.querySelector('.add-book')
const newBookButton = document.querySelector('.new-book')  
const addBookButton = document.querySelector('.add-book-button')

//new book form button event listener

newBookButton.addEventListener('click', () => {  
    for (i = 0; i < 3; i++){                                        //Clear input fields. need external clear function(?)
        bookInput[i].value = ''
    }
                  
    hideOnOutsideClick()
    addBook.style.display = ('grid')         
})





function formValidation(){
    
    // for (i = 0; i < 3; i++){
    //     bookInput[i].setCustomValidity("Fill the field");
    //     // if (!bookInput[i].value) formValidation()
    // }
    
     
    

//     for (i = 0; i < 3; i++){
//         // bookInput[i].setCustomValidity("Fill the field");
//         if (!bookInput[i].value) formValidation()
//     }
}

// submit form button event listener

addBookButton.addEventListener('click', () => {
    
    
    
    formValidation()

    for (i = 0; i < 3; i++){
        // if (bookInput[i].value) errorMsg[i].textContent = ''
        if (!bookInput[i].value) return
            // errorMsg[i].textContent = '*Fill this field'  
    }

    addBookToLibrary()                     
    printLibrary()
    addBook.style.display = ('none')
})

// function for hide form box when click outside

function hideOnOutsideClick() {
document.addEventListener( 'click', (event) => {

	const withinBoundaries = event.composedPath().includes(addBook);
 
	if ( ! withinBoundaries ) {
		addBook.style.display = ('none') 
	}
}, once = true)
}

addBook.addEventListener("submit", (e) => {
    e.preventDefault();
    
  });

// display whole library function( mb need optimization) 


function printLibrary(){                                              
    const booksListBefore = document.querySelector('.books-list')
    books.removeChild(booksListBefore)
    
    const booksListAfter = document.createElement('div')
    booksListAfter.classList.add('books-list')
    
    for(let unit of myLibrary){                                       //create cards 
        const card = document.createElement('div')
        const bookTitle = document.createElement('div')
        const bookAuthor = document.createElement('div')
        const bookPages = document.createElement('div')
        const statusButton = document.createElement('button')
        const removeButton = document.createElement('button')
        
        card.classList.add('card')
        bookTitle.classList.add('bookTitle')
        bookAuthor.classList.add('bookAuthor')
        bookPages.classList.add('bookPages')
        statusButton.classList.add('statusButton')
        removeButton.classList.add('removeButton')
        

        bookTitle.textContent =  unit.title
        bookAuthor.textContent = 'By ' + unit.author
        bookPages.textContent = unit.pages + ' pages'
        let status = 'NOT READ'
        statusButton.style.backgroundColor = 'rgb(177, 88, 88)'
        if (unit.status) {
            status = 'READ'
            statusButton.style.backgroundColor = 'rgb(41, 75, 40)'
        }
        statusButton.textContent = status
        removeButton.textContent = 'DELETE'

        card.appendChild(bookTitle)
        card.appendChild(bookAuthor)
        card.appendChild(bookPages)
        card.appendChild(statusButton)
        card.appendChild(removeButton)
        booksListAfter.appendChild(card)
        console.log(unit)    
        // statusButton.addEventListener('click', () => {
        //     unit.toggleStatus()
        //     console.log(unit)
        //     printLibrary()
        // })    
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

const closeForm = document.querySelector('.closeForm')
//close Form button eventListener

closeForm.addEventListener('click', () => {
    addBook.style.display = ('none')
  
})




//function for create event listeners of remove buttons list

function removeButtonEvents(){  
                                       
    const removeButtons = document.querySelectorAll('.removeButton')
    console.log(removeButtons)
    let removeButtonsArray = Array.from(removeButtons)
    console.log(removeButtonsArray)
    

    removeButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
                console.log(removeButtonsArray)
                console.log(removeButtons)
                myLibrary.splice(removeButtonsArray.indexOf(button),1);
                printLibrary()
        });
    });
}

//function for create event listeners of status buttons list

function statusButtonEvents(){                                      
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



   