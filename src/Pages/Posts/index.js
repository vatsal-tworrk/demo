import { Link } from "react-router-dom";
import post from './data';

const Posts = () => {
    return (
        <div className="main">
            <h2>Welcome to the Posts</h2>
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Posts;