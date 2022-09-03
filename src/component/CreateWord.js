import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const days = useFetch("http://localhost:3001/days")
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault(); //버튼을 눌러도 새로고침 되지않도록 함
    
    fetch(`http://localhost:3001/words/`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      })
    })
    .then(res => {
      if(res.ok){
        alert("단어가 추가 되었습니다.");
        navigate(`/day/${dayRef.current.value}`)
      }
    });
  }

  const engRef = useRef(null);  //DOM에 접근
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="단어를 입력해주세요" ref={engRef}/>    
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="뜻을 입력해주세요" ref={korRef}/>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}

export default CreateWord;