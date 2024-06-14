import { useParams, Link } from 'react-router-dom';
import post from '../Posts/data';

const Post = () => {

    const { id } = useParams();
    const data = post.find((b) => b.id === id);
    return (
        <div className="list">
            {data ? (<div>
                <h1>Welcome to the Post</h1>
                <h3>Welcome to the PostID : {data.id}</h3>
                <h3>Welcome to the PostName : {data.name}</h3>
                <Link to={`/posts/${data.id}/comments`}>
                    Click here for the Comments
                </Link>
                <br />  <br />
                <Link to={"/posts"}>
                    <button>Back</button>
                </Link>
            </div>) : <p>Not Found data</p>}
        </div>
    )
}

export default Post;