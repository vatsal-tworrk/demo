import { Link } from 'react-router-dom';
import books from './data';

const BookList = () => {
  return (
    <div className='list'>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default BookList;