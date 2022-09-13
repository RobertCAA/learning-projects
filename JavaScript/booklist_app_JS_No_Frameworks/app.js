// Book Class: Represents a book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }    
}

// UI Class: Handle UI tasks
class UI{
    //Display books
    static displayBooks(){
               
        // Save stored books in const in array
        const books = Store.getBooks();

        // Loops thorugh books and display them on UI
        books.forEach((book) => UI.addBookToList(book));
    }

    // Adds a book
    static addBookToList(book){
        // Grabs list of books
        const list = document.querySelector('#book-list');
        // Create row with stored book information
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        // Append row to list
        list.appendChild(row);
    }

    // Delete the parent parent of the element we clicked with the class of delete
    static deleteBook(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }else{}
    }
    
    // Show alert to user
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form')
        // Insert div before form after container
        container.insertBefore(div, form);

        //Vanish message in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    // Clear input fields after submit
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handle storage
class Store{

    // Get books
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    // Add books
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Remove books
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
    // get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    // Validate values
    if(title === '' || author === '' || isbn === '' ){
        // Show alert to user
        UI.showAlert('Please fill in all fields', 'danger');
    }else{
        // Instatiate book
        const book = new Book(title, author, isbn);
        console.log(book)

        // Add book to list
        UI.addBookToList(book);

        // Adds book to local storage
        Store.addBook(book);

        // Success message
        UI.showAlert('Book added', 'success');

        // Clear fields
        UI.clearFields();
    }

    
});

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Delete from UI
    UI.deleteBook(e.target);

    // Remove from storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book removed', 'success');
})