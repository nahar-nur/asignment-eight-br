import Banner from '../../assets/book-img/banner-2.jpg' 


const banner = () => {
    return (
        <div className='mt-12 flex gap-24'>
            <div  className='w-1/2 ml-24'>
            <h2 className="text-5xl text-left font-semibold mt-24">Books to freshen  up <br /> your bookshelf <br /></h2>
            <button className="px-4 py-2 bg-green-500 text-white rounded mt-12">View List</button>
            </div>
            <img className='w-[300px] mr-60' src={Banner} alt="" />
        </div>
    );
};

export default banner;