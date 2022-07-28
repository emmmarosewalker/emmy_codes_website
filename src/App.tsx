import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import { BlogPost } from './pages/Blog/BlogPost';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>

  );
}

export default App;
