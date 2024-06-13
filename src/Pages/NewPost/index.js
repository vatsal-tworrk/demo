import { Link } from "react-router-dom";
import data from './data'

const NewPost = () => {
    return (
        <div className="list">
            <h2>New Post</h2>
            <ul>
                {data.map((d) => (
                    <li key={d.id}>{d.name}</li>
                ))}
            </ul>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default NewPost;