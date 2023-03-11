import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';
import Task from './pages/Task';
import Navbar from './data-access/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/createtask' exact element={<CreateTask/>}/>
          <Route path='/task/:id' exact element={<Task/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
