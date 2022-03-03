import './App.css';
import './App2.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';


function App() {

  return (
    <div className="App">
      
      <Router>
        <div className='navbar'>        
          <Link to="/createpost">Create a Post</Link>
          <Link to="/">Home</Link>
        </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
