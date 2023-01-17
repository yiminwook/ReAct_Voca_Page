import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data);
    })
  }, [url]); //url이 변경될때만 실행

  return data;
}

export default useFetch;