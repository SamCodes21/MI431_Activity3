import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const books = [
    {
      id: 1,
      title: 'A Knight of the Seven Kingdoms',
      author: 'George RR Martin',
      year: 2015,
      image: 'https://prodimage.images-bn.com/pimages/9781101965887_p0_v3_s1200x630.jpg',
      isFavorite: true
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339392178i/37449.jpg',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      year: 2021,
      image: 'https://prodimage.images-bn.com/pimages/9780593135228_p0_v6_s600x595.jpg',
      isFavorite: true
    }
  ]

  return (
    <>
      <h1>Favorite Books</h1>
      <Booklist books={books} />
    </>
  )
}

function Booklist({ books }) {
  return (
    <div className="booklist">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} width="150" />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published: {book.year}</p>
      
      <FavoriteToggle isFavorite={book.isFavorite} />
    </div>
  )
}

function FavoriteToggle({ isFavorite }) {
  if (isFavorite){
    return <p style={{color: "Green"}}>Favorite Book</p>
  } else {
    return <p style={{color: "Grey"}}>Not a Favorite</p>
  }
}

export default App
