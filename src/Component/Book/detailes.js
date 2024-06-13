import { useParams, Link } from 'react-router-dom';
import books from './data';

const BookDetail = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === id);

    return (
        <div className='detaile'>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>{book.description}</p>
            <Link to="/book">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default BookDetail;