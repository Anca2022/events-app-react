import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import EventDetails from './components/EventDetails';
import MyTickets from './components/MyTickets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<HomePage/>}></Route>
        <Route path='/event-details' element={<EventDetails/>}></Route>
        <Route path='/my-tickets' element={<MyTickets/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
