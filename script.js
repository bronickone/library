let myLibrary = [];                  

//book class  

class Book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
    }
}


// function Book(title, author, pages, status) {                                         
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.status = status
//   }

  //some initaial books 
  const newLibButton = document.querySelector('.new-lib')
  
  newLibButton.addEventListener('click', () => {
   const book1 = new Book('Kobzar', 'Taras Shevchenko', '720', false)     
   const book2 = new Book('Nineteen Eighty-Four', 'George Orwell', '312', true)
   const book3 = new Book('Solaris', 'Stanislaw Lem', '204', true)
   const book4 = new Book('Hyperion', 'Dan Simmons', '482', true)
   const book5 = new Book('The Moomins and the Great Flood', 'Tovve Janson', '52', true)
   const book6 = new Book('The Shining', 'Stephen king', '447', true)
   const book7 = new Book('The Art of Loving', 'Erich Fromm', '133', true)
   const book8 = new Book('The Hobbit, or There and Back Again', 'J. R. R. Tolkien', '310', true)
   const book9 = new Book('A Wild Sheep Chase', 'Haruki Murakami', '299', true)
   const book10 = new Book('A Clockwork Orange', 'Anthony Burgess', '192', false)
   const book11 = new Book('The Wonderful Wizard of Oz', 'L. Frank Baum', '272', true)
   const book12 = new Book(`Harry Potter and the Philosopher's Stone`, 'J. K. Rowling', '223', true)
   const book14 = new Book('The Secret Doctrine', 'Helena Blavatsky', '500', false)
   const book15 = new Book('The Science of Differentiation', 'Ra Uru Hu & Linda Bunnell', '444', true)
   const book16 = new Book('The Art of Happiness', 'Dalai-lama &  Howard Cutler', '352', true)
   
//    for (let i = 1; i <=16; i++){
//        myLibrary.push('book' + i)
//    }
   
   myLibrary.push(book1)
   myLibrary.push(book2)
   myLibrary.push(book3)
   myLibrary.push(book4)
   myLibrary.push(book5)
   myLibrary.push(book6)
   myLibrary.push(book7)
   myLibrary.push(book8)
   myLibrary.push(book9)
   myLibrary.push(book10)
   myLibrary.push(book11)
   myLibrary.push(book12)
   myLibrary.push(book14)
   myLibrary.push(book15)
   myLibrary.push(book16)
   printLibrary()
  })

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
    // formAnim('formAppear', 'grid', 1)
     addBook.style.display = ('grid')         
})

// submit form button event listener

addBookButton.addEventListener('click', () => {
    
    for (i = 0; i < 3; i++){     
        if (!bookInput[i].value) return
    }

    addBookToLibrary()                     
    printLibrary()
    addBook.style.display = 'none'
    // formAnim('formDis', 'none', 300);
})

// function for hide form box when click outside

function hideOnOutsideClick() {
document.addEventListener( 'click', (event) => {
	const withinBoundaries = event.composedPath().includes(addBook);
 
	if ( ! withinBoundaries ) {	
        addBook.style.display = 'none'    
	}

}, once = true)
}

addBook.addEventListener("submit", (e) => {
    e.preventDefault();  
})

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
    }
    
    books.appendChild(booksListAfter)
    removeButtonEvents()
    statusButtonEvents()
    addBook.style.display = 'none'  
}

printLibrary()


const closeForm = document.querySelector('.closeForm')

//close Form button eventListener

closeForm.addEventListener('click', () => {
    addBook.style.display = 'none'
   //formAnim('formDis', 'none', 300);
})

//element animation function

function formAnim(animClass, displayArg, len){
    console.log(animClass)
    addBook.classList.add(animClass)
    setTimeout(() => {  addBook.style.display = (displayArg) 
                        addBook.classList.remove(animClass) 
                     }, len);  
}

//function for create event listeners of remove buttons list



function removeButtonEvents(){                                         
    const removeButtons = document.querySelectorAll('.removeButton')
    let removeButtonsArray = Array.from(removeButtons)
    removeButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
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
                myLibrary[statusButtonsArray.indexOf(button)].status = 
                !(myLibrary[statusButtonsArray.indexOf(button)].status)
                
                printLibrary()
        });
    });
}



   