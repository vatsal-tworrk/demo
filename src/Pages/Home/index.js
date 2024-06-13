import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <div className="heading">
                <h1>Book Store</h1>
            </div>
            <div className="category">
                <Link to="/book">
                    Book
                </Link>
                <Link to="/stationery">
                    Stationery
                </Link>
                <Link to="/posts">
                    Posts
                </Link>
                <Link to="/posts/new">
                    NewPost
                </Link>
            </div>
        </div>
    )
}

export default Main;