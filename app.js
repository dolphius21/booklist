// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to List Function
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  
  // Create tr element
  const row = document.createElement('tr');
  
  // Insert columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
}

// Show Alert Function
UI.prototype.showAlert = function(message, className) {
  // Create a div
  const div = document.createElement('div');
  // Add Classes
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // timeout after 3 sec
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Clear Fields Function
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // variables for form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if( title === '' || author === '' || isbn === '' ) {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success')

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});