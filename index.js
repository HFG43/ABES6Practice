class Book {
    constructor (title,author,id){
        this.author = author;
        this.title = title;
        this.id = id;
    }
}

class BookList {
    constructor () {
      this.addForm = document.getElementById('input-form');
      this.addForm.addEventListener('submit', this.addBook.bind(this));
      this.listBook = [];
    }

    displayBook () {

    }

    addBook (event) {
        event.preventDefault();
        const newBook = new Book(this.addForm.form_title.value,this.addForm.form_author.value,0);
        this.listBook = [newBook,88...this.listBook];
        // listBook.push(newBook);
        console.log(this.listBook);
      
    }

    removeBook() {

    }
}
const bookList = new BookList();