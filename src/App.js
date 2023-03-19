import Homepage from './components/Homepage';
import Footer from './components/Footer';
import PyDataStruct from './components/PyDataStruct';
import CodeBlog from './components/CodeBlog';
import CompWorkflow from './components/CompWorkflow';
import CodeBlogMain from './components/CodeBlogMain';
import Git from './components/Git';
import Pure from './components/Pure';

import ScienceBlog from './components/ScienceBlog';
import SciWrite from './components/SciWrite';
import { Routes, Route, Link } from 'react-router-dom';
import "../node_modules/highlight.js/styles/vs.css";


// https://www.robinwieruch.de/react-router-nested-routes/

const App = () => {
  return (
    <>
      <div className='body'>
      
        <div className='header'>
          <nav className='head-container'>
            <Link to="/home">Home</Link>
            <Link to="/code-blog">Code Blog</Link>
            <Link to="/science-blog">Physics Blog</Link>
          </nav>
        </div>

        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="home" element={<Homepage/>} />
          <Route path="code-blog" element={<CodeBlog/>}>
            <Route index element={<CodeBlogMain />} />
            <Route path="comp-workflow" element={<CompWorkflow />} />
            <Route path="py-data-struct" element={<PyDataStruct />} />
            <Route path="git" element={<Git />} />
            <Route path="pure-func" element={<Pure />} />
          </Route>
          <Route path="science-blog" element={<ScienceBlog/>}>
            <Route index element={<CodeBlogMain />} />
            <Route path="sci-write" element={<SciWrite />} />
          </Route>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>

        <div className='footer'>
          <Footer/>
        </div>
      </div>
    </>
    
  );
};

export default App;