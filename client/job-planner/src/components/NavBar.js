import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/" >Home</Link>
      <Link to="/cal" >Calendar view</Link>
      <Link to="/joblist" >List of jobs</Link>

    </nav>
  )
}

export default Navbar
