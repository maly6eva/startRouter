import {Link, useNavigate} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()

    function handleForgoLogin() {
        navigate('/', {state: {login: "You are not logged in"}})
    }
  return (
    <div>
      Login Page
     <Link
     to='/'
     state={{login: "You are logged in"}}
     style={{padding:'10px',  background: "#007bff", color: "#fff", textDecoration: "none", borderRadius: "5px"}}>
       Log in
     </Link>
      <button onClick={handleForgoLogin}>Forgot login data</button>
    </div>
  );
}

export default LoginPage;
