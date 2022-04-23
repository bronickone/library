function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${status}`)
        }
  }
  
  const book1 = new Book('kolobok', 'unknown author', '10', 'read already')

  console.log(book1.info())