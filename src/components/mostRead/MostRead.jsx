import LittleTitle from '../littleTitle/LittleTitle';
import './mostRead.css';
import { Link } from 'react-router-dom';

const MostRead = () => {
  return (
    <div className='most-read'>
        <div className="container">
            <LittleTitle title={"Most Read"} dark={true}/>
        </div>
        <div className="container most-read-main">
            <div className="most-read-hero">
                <Link to='/' className="most-read-category most-read-category-1">BUSINESS</Link>
                <Link to='/' className="most-read-title">Britain’s Most Unusual Homes for Sale This Year</Link>
            </div>
        </div>
        <div className="container most-read-bottom"></div>
    </div>
  )
}

export default MostRead