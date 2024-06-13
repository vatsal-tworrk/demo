import { useParams, Link } from 'react-router-dom';
import post from '../Posts/data';

const Comments = () => {
    const { id } = useParams();
    const data = post.find((b) => b.id === id);

    return (
        <div className="list">
            <h2>Comments</h2>
            <ul>
                {data.comments.map((comment) => (
                    <li key={post.id}>{comment}</li>
                ))}
            </ul>
            <Link to="/posts">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default Comments;
