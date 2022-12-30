import './App.css';
import PlayerDetails from './PlayerDetails';
import FrontPage from './FrontPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
          <Route path='/player' element={<PlayerDetails />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
