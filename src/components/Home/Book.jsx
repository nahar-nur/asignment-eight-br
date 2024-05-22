import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {id,bookName, author, image,rating, category, tags}= book
    return (
        <div>
          <Link to={`/book/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
             
  <figure><img className="w-[150px] h-[200px" src= {image} alt="Shoes" /></figure>
  <h5 className="flex gap-12 mt-4">{tags}</h5>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
    </h2>
    <p>By: {author}</p>
    <div className="card-actions flex justify-between ">
      <div className="text-xs">{category}</div> 
      <div className="text-xs flex gap-1">
      <CiStar />
        {rating}</div>
    </div>
  </div>
</div>
</Link>
        </div>
    );
};

export default Book;