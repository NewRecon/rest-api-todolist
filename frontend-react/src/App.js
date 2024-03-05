import './App.css';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/homePage" element={<Home/>} />
          {/* <Route path="/edit" element={<EditTask/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
