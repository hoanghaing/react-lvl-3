import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {

  return (
    <div className='main-layout'>
      <header className='header'>
        <nav>
          <ul>
            <li><Link to="/local-storage" style={{ color: 'white', textDecoration: 'none' }}>Exercise 1</Link></li>
            <li><Link to="/generic-dialog" style={{ color: 'white', textDecoration: 'none' }}>Exercise 2</Link></li>
            <li><Link to="/auto-filter" style={{ color: 'white', textDecoration: 'none' }}>Exercise 3</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout