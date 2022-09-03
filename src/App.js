import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DayList from './component/DayList.js';
import Header from './component/Header.js';
import Day from './component/Day.js'
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import EmptyPage from './component/EmptyPage';


// REST API json-server 설치
// uri 주소와 http method로 CRUD요청
// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001

function App() {
  return (
    <BrowserRouter>
      <div className="App">
 
         <Header />
          <Routes>
           <Route path="/" element={<DayList />} />
           <Route path="/day/:day"  element={<Day />} />
           <Route path="/create_word" element={<CreateWord/>} />
           <Route path="/create_day" element={<CreateDay/>} />
           <Route path="*" element={<EmptyPage/>} />
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
