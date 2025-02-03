import { Outlet, Link } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {

  return (
    <div className='main-layout'>
      <header className='header'>
        <ul className='menu-list'>
          <li className='menu-item'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li className='menu-item'><Link to="/local-storage" style={{ color: 'white', textDecoration: 'none' }}>Exercise 1</Link></li>
          <li className='menu-item'><Link to="/generic-dialog" style={{ color: 'white', textDecoration: 'none' }}>Exercise 2</Link></li>
          <li className='menu-item'><Link to="/auto-filter" style={{ color: 'white', textDecoration: 'none' }}>Exercise 3</Link></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout