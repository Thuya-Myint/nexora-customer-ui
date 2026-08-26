import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-30'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout