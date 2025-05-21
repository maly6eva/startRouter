import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <header style={{padding: '1rem', background: '#eee'}}>
          <nav style={{display: 'flex', gap: '1rem'}}>
            <ul>
                <NavLink to='/about'><li>about</li></NavLink>
                <NavLink to='/search'><li>search</li></NavLink>
                <NavLink to='/login'><li>login</li></NavLink>
            </ul>
          </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;
