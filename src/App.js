import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
  return (

    <Router>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>


    </Router>

  );
}

export default App;
