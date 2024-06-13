import { Link } from "react-router-dom";
import data from './data'

const Stationerylist = () => {
    return (
        <div className='list'>
            <h1>Stationery List</h1>
            <ul>
                {data.map((d) => (
                    <li key={d.id}>
                        <Link to={`/stationery/${d.id}`}>{d.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to={'/'}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Stationerylist;