import {
  BrowserRouter, Route, Routes, useLocation
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from './common/Layout';
import { BlogPage } from './pages/Blog/AllBlogPosts';
import { BlogPost } from './pages/Blog/BlogPost';
import { Home } from './pages/Home/Home';

function App() {
  const location = useLocation();
  return (
    <Layout>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={100}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>

  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
