import {useLocation} from "react-router-dom";

function HomePage() {
    const location = useLocation()
    const loginMessage = location.state?.login
  return (
    <div>
      <h1>Home Page</h1>
        { loginMessage && <p>{ loginMessage}</p>}
      <p>You are logged in / not logged in</p>
    </div>
  );
}

export default HomePage;
