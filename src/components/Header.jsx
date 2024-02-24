import { NavLink } from "react-router-dom"

function Header() {
  return (
<>
<header className="header">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/basket'>Basket</NavLink>
</header>
</>
  )
}

export default Header