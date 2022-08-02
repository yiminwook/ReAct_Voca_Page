import { Link } from 'react-router-dom';
import dummy from '../db/data.json'

const DayList = () => {
  console.log(dummy)
  return ( 
  <ul className='list_day'>
    {dummy.days.map(day => (
      <li key={day.id}>
        <Link to="/day">Day {day.day}</Link>
      </li>
    ))}
  </ul>
  );
}

export default DayList;