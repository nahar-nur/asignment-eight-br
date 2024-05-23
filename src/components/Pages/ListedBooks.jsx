import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredreadBook } from "../Utility/localStorage";



const ListedBooks = () => {
    
    const books = useLoaderData();
    const [listedBooks, setListedBooks]= useState([])

    useEffect( ()=>{
        const storedBookIds = getStoredreadBook()
        if(books.length>0){
            const booksListed = books.filter(book=>storedBookIds.includes(book.id))
            // const booksListed = []
            // for(const id of storedBookIds){
                // const booksListed = books.find(book=> book.id===id)
                // if(books){
                    // booksListed.push(books)
                // }
            // }

            setListedBooks(booksListed);
            // console.log(bookListed);
        }
    },[])
    return (
        <div className="mt-12">
            <h2 className="text-5xl text-center">Books: {listedBooks.length}</h2>
            <div>
                {
                    listedBooks.map(book=> <li key={book.id}>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl mr-12" />
    <div>
      <h1 className="text-5xl font-bold">{book.bookName}</h1>
      <br />
      <h3>By: {book.author}</h3>
      <br />
      <p>{book.category}</p>
      <hr />
      
      <p><span className="font-semibold">Tag</span>: {book.tags}</p>
      <br />
      <h3>Number of pages:{book.totalPages}</h3>
      <br />
      <p>Publisher:{book.publisher}</p>
      <br />
      <h3>Year of Publishing: {book.yearOfPublishing}</h3>
      <br />
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.id}`}>
      <button  className="btn btn-primary mr-2 mt-4">View Details</button>
      </Link>
     
    </div>
  </div>
</div>
</li>)
}
</div>
        </div>
    );
};

export default ListedBooks;