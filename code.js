var books = [];

function deleteBook() {
  var title = document.getElementById("title").value;
  if (document.getElementById("title").value == "") {
    alert("Please enter the title of the book");
  } else {
    for (var i = 0; i < books.length; i++) {
      if (books[i].title == title) {
        books.splice(i, 1);
        cleanTable();
        showBooks();
        console.log("length of books is  : " + books.length);
        return;
      }
    }
    alert("Book not found");
  }
}

function addToArray() {
  var sr = books.length + 1;
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var genre = document.getElementById("genre").value;
  books.push({ sr, title, author, genre });
  console.log(books.length);

  cleanTable();
  showBooks();
}

function add() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var genre = document.getElementById("genre").value;
  if (title == "" || author == "" || genre == "") {
    alert("Please fill all the fields");
  } else {
    for (var i = 0; i < books.length; i++) {
      if (books[i].title == title) {
        alert("Book already exists");
        return;
      }
    }
    addToArray();
  }
}

function cleanTable() {
  var table = document.getElementById("table");
  var rowCount = table.rows.length;
  if (rowCount == 1) {
    return;
  }
  for (var i = 1; i < rowCount; i++) {
    table.deleteRow(1);
  }
}


function updateBook() {
  var title = document.getElementById("updateTitle").value;
  var author = document.getElementById("updateAuthor").value;
  var genre = document.getElementById("updateGenre").value;
  if (title == "" || author == "" || genre == "") {
    alert("Please fill all the fields");
  } else {
    for (var i = 0; i < books.length; i++) {
      if (books[i].title == title) {
        books[i].author = author;
        books[i].genre = genre;
        cleanTable();
        showBooks();
        return;
      }
    }
    alert("Book not found");
  }
}


function showBooks() {
  var table = document.getElementById("table");
  for (var i = 0; i < books.length; i++) {
    var row = table.insertRow(i + 1);
    var sr = row.insertCell(0);
    var title = row.insertCell(1);
    var author = row.insertCell(2);
    var genre = row.insertCell(3);
    sr.innerHTML = books[i].sr;
    title.innerHTML = books[i].title;
    author.innerHTML = books[i].author;
    genre.innerHTML = books[i].genre;
  }
}
