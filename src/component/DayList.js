import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DayList = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/days')
    .then(res => {
      return res.json();
    })
    .then(data => { 
      setDays(data);
    });
  }, []); //맨 처음 랜더링될때 한번만 실행

  return ( 
  <ul className='list_day'>
    {days.map(day => (
      <li key={day.id}>
        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
      </li>
    ))}
  </ul>
  );
}

export default DayList;