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
      this.listContainer = document.getElementById('list_container');
      this.books = JSON.parse(localStorage.getItem('book')) || [];
      this.addForm.addEventListener('submit', this.addBook.bind(this));
      this.displayBook();
      this.addForm.form_title.value = '';
      this.addForm.form_author.value = '';
      this.addForm.form_id.value = ''
    }

    displayBook () {
      this.listContainer.innerHTML = '';
      const list = document.createElement('ul');
      list.classList.add('list-container');

      for(let i = 0; i < this.books.length; i +=1){
        const book = this.books[i];
                
        const listItem = document.createElement('li');
        
        const booksInfo = document.createElement('span');
        booksInfo.textContent = `${book.title} by ${book.author}`;
        listItem.appendChild(booksInfo);

        const removeButton = document.createElement('button');
        removeButton.id = `${this.books[i].id}`;
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('remove_button_index', i);
        listItem.appendChild(removeButton);

        list.appendChild(listItem);
      }

      this.listContainer.appendChild(list);
    }

    addBook (event) {
        event.preventDefault();
        const book = new Book(this.addForm.form_title.value,this.addForm.form_author.value,this.addForm.form_id(Date.now());
        this.listBook = [book, ...this.books];
        localStorage.setItem('book', JSON.stringify(this.books));
        this.displayBook();
        
        this.addForm.form_title.value = '';
        this.addForm.form_author.value = '';
    }

    // removeBook() {
    //     const bookIndex = this.target.dataset.index;
    //     this.books.splice(bookIndex, 1);
    //     localStorage.setItem('book', JSON.stringify(this.books));
    //     this.displayBooks();
    // }
}
const bookList = new BookList();