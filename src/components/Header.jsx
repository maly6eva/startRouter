import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <header style={{padding: '1rem', background: '#eee'}}>
          <nav style={{display: 'flex', gap: '1rem'}}>
              <NavLink to='/'>Главная</NavLink>
              <NavLink to='/about'>О нас</NavLink>
              <NavLink to='/products'>Продукты</NavLink>
              <NavLink to='/search'>Поиск</NavLink>
              <NavLink to='/login'>Вход</NavLink>
          </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;
