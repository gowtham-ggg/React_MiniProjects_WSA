import React, { useState } from "react";
import BookData from "./BookData";

const Book = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [bookData, setBookData] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newBook = { title, author, date, genre };
    setBookData([...bookData, newBook]);
    setTitle("");
    setAuthor("");
    setDate("");
    setGenre("");
  };

  return (
    <div className="main">
      <h1>Upcoming Book Releases</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Book Title"
          required
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="Author Name"
          required
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
          required
        />
        <input
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          type="text"
          placeholder="Genre"
          required
        />
        <button type="submit">Add Book</button>
      </form>
      <BookData data={bookData} />
    </div>
  );
};

export default Book;
