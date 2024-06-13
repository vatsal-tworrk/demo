import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Welcome to the Contact Page</h2>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Contact;