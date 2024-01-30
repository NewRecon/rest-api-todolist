import './App.css';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/edit" element={<EditTask/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
