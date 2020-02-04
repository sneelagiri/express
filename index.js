/* Hello World Example
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 */

// Books Example:
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "The Diary of a Young Girl", author: "Anne Frank" }
];
app.get("/", (req, res) => res.redirect("/books"));
app.get("/books", (req, res) => res.json({ data: books }));
app.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const book = books.find(b => b.id == bookId);
  //Wrong 404 catch
  /*   if (!book) {
    res.status(404).end();
  }
  res.json(book); */

  //Correct 404 catch
  if (book) {
    res.json(book);
  } else {
    res.status(404).end();
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
