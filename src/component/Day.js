import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word.js"


 const Day = () => { 

  console.log(useParams())
  // const day = useParams().day;
  const { day } = useParams();
  const [words, setWords] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3001/words?day=${day}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      setWords(data);
    })
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word key={word.id} word={word} />))}
        </tbody>
      </table>
    </>
  );
}

export default Day;