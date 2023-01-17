import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const [isLoading, setIsLoading] = useState(false);

  const days = useFetch("http://localhost:3001/days");
  const engRef = useRef(null);  //DOM에 접근
  const korRef = useRef(null);
  const dayRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const day = dayRef.current.value;
    const eng = engRef.current.value;
    const kor = korRef.current.value;

    e.preventDefault(); //버튼을 눌러도 새로고침 되지않도록 함
  
    if ( !isLoading && day && eng && kor ) {
      setIsLoading(true);

      fetch(`http://localhost:3001/words/`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false
        })
      })
      .then(res => {
        if(res.ok){
          alert("단어가 추가 되었습니다.");
          navigate(`/day/${day}`)
          setIsLoading(false);
        }
      });
    }
  }

  if(days.length === 0){
    return <span>Loading...</span>;
  }

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
      <button>{isLoading ? "Saving..." : "단어 추가"}</button>
    </form>
  );
}

export default CreateWord;