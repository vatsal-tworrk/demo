import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
            <h2>Welcome to the About Page </h2>
            <Link to={'/'}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default About;