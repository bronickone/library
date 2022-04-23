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
  
//   const book1 = new Book('kolobok', 'unknown author', '10', false)

//   console.log(book1.info())

function addBookToLibrary() {
      let name = prompt(`Enter book's name`)
      let author = prompt(`Enter author's name`)
      let pages = prompt('Enter quantity of pages')
      let status = prompt('Have you read the book?(y/n)')
      
      status === 'y' ? status = true : status = false; 
      const book = new Book(name, author, pages, status)
      
      myLibrary.push(book)
  }
const books = document.querySelector('.books')

//  addBookToLibrary(book1);
let i = true;
while (i) {
    addBookToLibrary()
    let flag = prompt('One more book(y/n)?')
    if (flag !== 'y') i = !i;
}

  for(let unit of myLibrary){
    let paraBook = document.createElement('p') 
    paraBook.textContent = unit.info()
    books.appendChild(paraBook)
  }
  

