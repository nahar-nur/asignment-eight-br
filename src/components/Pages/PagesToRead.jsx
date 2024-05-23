import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredreadBook } from "../Utility/localStorage";
import ListedBooks from "./ListedBooks";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';


const PagesToRead = () => {
    const books = useLoaderData();
const [listedBooks, setListedBooks]= useState([]);
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
useEffect(()=>{
    const storedBookIds = getStoredreadBook();
    {
        const booksListed = storedBookIds.map(book=> <ListedBooks book={book} key={book.id}></ListedBooks>
        )
    setListedBooks(booksListed);
    console.log(listedBooks);
    }
},[books])
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

    return (
        <div className="mt-12 ml-24">
             Reading books:{listedBooks.length}
            <BarChart
      width={500}
      height={300}
      data={listedBooks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {listedBooks.map((entry,index ) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>;

        </div>
    );
};

PagesToRead.propTypes ={fill: PropTypes.number,
    x:PropTypes.number,
    y:PropTypes.number,
    width:PropTypes.number,
    height:PropTypes.number,
    
}

export default PagesToRead;
