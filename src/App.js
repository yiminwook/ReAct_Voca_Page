import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DayList from './component/DayList.js';
import Header from './component/Header.js';
import Day from './component/Day.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
 
         <Header />
          <Routes>
           <Route path="/" element={<DayList />} />
           <Route path="/day" element={<Day />} />
           {/* <Route path="*" element={EmptyPage} /> */}
          </Routes>

      </div>
      </BrowserRouter>
  );
}

export default App;
