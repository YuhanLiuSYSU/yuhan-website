import { Link, Outlet } from 'react-router-dom';

const ScienceBlog = () => {
    return (
      <div className='innerbody'>
        

        <div className='nav-bar'>
            <nav className='nav-bar-list'>
              <ol>
                <li><Link to="sci-write" className='nav-item'>Writing in Science</Link></li>
              </ol>
              
            </nav>
        </div>
        

        <Outlet />
      </div>
    );
  };

export default ScienceBlog;