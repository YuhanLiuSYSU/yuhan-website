import { Link, Outlet } from 'react-router-dom';

const CodeBlog = () => {
    return (
      <div className='innerbody'>
        

        <div className='nav-bar'>
            <nav className='nav-bar-list'>
                <Link to="comp-workflow" className='nav-item'>Computation workflow</Link>
                <Link to="py-data-struct" className='nav-item'>Python Data Structure</Link>
                <Link to="git" className='nav-item'>Git</Link>
                <Link to="pure-func" className='nav-item'>Pure Function</Link>
            </nav>
        </div>
        

        <Outlet />
      </div>
    );
  };

export default CodeBlog;