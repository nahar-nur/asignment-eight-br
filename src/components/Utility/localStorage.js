
const getStoredreadBook =()=>{
const storedReadBook = localStorage.getItem('read-books')
if(storedReadBook){
    return JSON.parse(storedReadBook);
}
return [];
}



const saveReadBook =id=>{
    const storedReadBooks = getStoredreadBook();
    const exists = storedReadBooks.find(bookid=> bookid===id)
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
    
}
export{getStoredreadBook,saveReadBook}