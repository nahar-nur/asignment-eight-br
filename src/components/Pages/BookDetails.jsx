import { useLoaderData, useParams } from "react-router-dom";
import {saveReadBook} from '../../components/Utility/localStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
  
  

    const books = useLoaderData()
    const {id, image, bookName, author,category,review,tags,totalPages,publisher,yearOfPublishing,rating}= useParams()
    const idInt = parseInt(id)
    const book = books.find(book=> book.id===idInt)
    console.log(book,id);

    const handleToRead = ()=>{
      saveReadBook(idInt)
      toast('You have already read it')
    };
    const handlWishList=()=>{
      toast('added to list')
    }

    return (
        <div className="mt-12">
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
      <p className="py-6 "><span className="font-semibold">Review</span>: {book.review}</p>
      <p><span className="font-semibold">Tag</span>: {book.tags}</p>
      <br />
      <h3>Number of pages:{book.totalPages}</h3>
      <br />
      <p>Publisher:{book.publisher}</p>
      <br />
      <h3>Year of Publishing: {book.yearOfPublishing}</h3>
      <br />
      <p>Rating: {book.rating}</p>
      <button onClick={handleToRead} className="btn btn-primary mr-2 mt-4">Read</button>
      <button onClick={handlWishList}  className="btn btn-secondary ml-2 mt-4">Wishlist</button>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default BookDetails;
