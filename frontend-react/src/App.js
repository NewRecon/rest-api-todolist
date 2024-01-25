import './App.css';
import Header from './components/header/Header';
import TaskLine from './components/taskLine/TaskLine';
import "./models/Task.js"
import Task from './models/Task.js';

function App() {
  let task = new Task (
    0,
    "description",
    "true",
    "25.01.2024 20:07",
    "25.01.2024 21:07",
  )
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <TaskLine task={task}/>
      </div>
    </div>
  );
}

export default App;
