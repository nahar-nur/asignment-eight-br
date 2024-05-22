import { useEffect, useState } from "react";
import Book from "./book";
import { key } from "localforage";



const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('./books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])
    return (
        <div className="mt-32">
            <h2 className="text-5xl font-semibold text-center">Books: {books.length}</h2>
            <div>
                {
                    books.map(book=><Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;