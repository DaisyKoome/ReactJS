import './App.css';
import './App2.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Link to="/createpost">Create a Post</Link>
        <Link to="/">Home</Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
