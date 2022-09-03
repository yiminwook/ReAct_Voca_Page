import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CreateDay = () => {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const addDay = (e) => {
    fetch(`http://localhost:3001/days/`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: days.length + 1
      })
    })
    .then(res => {
      if(res.ok){
        alert("날짜가 추가 되었습니다.");
        navigate('/');
      }
    });
  }

  return (
    <div>
      <h3>현재일 수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}


export default CreateDay;