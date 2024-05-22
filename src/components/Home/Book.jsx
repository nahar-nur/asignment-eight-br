import { CiStar } from "react-icons/ci";
const Book = ({book}) => {
    const {bookName, author, image,rating, category, tags}= book
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
             
  <figure><img src= {image} alt="Shoes" /></figure>
  <h5 className="flex gap-12">{tags}</h5>
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
        </div>
    );
};

export default Book;