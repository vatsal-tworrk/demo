import { Link, useParams } from "react-router-dom";
import data from './data';

const Stationerydetailes = () => {
    const { id } = useParams();
    const d = data.find((b) => b.id === id)
    return (
        <div className='detaile'>
            <h1>{d.name}</h1>
            <p>Id: {d.id}</p>
            <p>Name: {d.description}</p>
            <p>Price: {d.price}</p>
            <Link to={"/stationery"}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Stationerydetailes;