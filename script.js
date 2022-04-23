let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
        let readOrNot = 'not read yet';
        if (status) readOrNot = 'read already';  
        return (`${title} by ${author}, ${pages} pages, ${readOrNot}`)
        }
  }
  
   const book1 = new Book('Peace and War', 'Lev Tolstoj', '1000', false)
   const book2 = new Book('1984', 'Orwell', '500', true)
   myLibrary.push(book1)
   myLibrary.push(book2)

//   console.log(book1.info())

function addBookToLibrary() {
      const name = document.querySelectorAll('.book-input')  
      let status
      name[3].value === 'yes' ? status = true : status = false; 
      const book = new Book(name[0].value, name[1].value, name[2].value, status)
      myLibrary.push(book)
  }


//  addBookToLibrary(book1);
// let i = true;
// while (i) {
//     addBookToLibrary()
//     let flag = prompt('One more book(y/n)?')
//     if (flag !== 'y') i = !i;
// }

const books = document.querySelector('.books')
const addBook = document.querySelector('.add-book')
const newBookButton = document.querySelector('.new-book')  
const addBookButton = document.querySelector('.add-book-button')

newBookButton.addEventListener('click', () => {
    addBook.style.display = ('flex')   
})

addBookButton.addEventListener('click', ()=>{
    addBookToLibrary()
    printLibrary()
    addBook.style.display = ('none')
})

function printLibrary(){
    let booksListBefore = document.querySelector('books-list')
    books.removeChild(booksListBefore)
    let booksListAfter = document.createElement('books-list')
    for(let unit of myLibrary){
        let paraBook = document.createElement('p') 
        paraBook.textContent = (myLibrary.indexOf(unit) + 1) + ') ' + unit.info()
        booksListAfter.appendChild(paraBook)
        let removeButton = document.createElement('button')
        removeButton.textContent = 'Remove Book'
        removeButton.classList.toggle('removeButton')
        booksListAfter.appendChild(removeButton)

    }
    books.appendChild(booksListAfter)
}

printLibrary()

const removeButtons = document.querySelectorAll('.removeButton')
  

