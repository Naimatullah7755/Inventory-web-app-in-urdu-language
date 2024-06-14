
import { createSignal } from "solid-js";
const Login = () => {


const [username, setUsername] = createSignal("");
const [password, setPassword] = createSignal("");
const [error,setError]=createSignal("");
const handleLogin=(event)=>{
  event.preventDefault();
  let payload={
    ourEmail:username(),
    ourPass:password()
  }
  fetch("http://localhost:5000/login",{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(response=>response.json()).then((res)=>{
    if(res && res.success){
      setError("login successfull");
    }else{
      setError("Login failed");
    }
    console.log(res)
  }).catch((e)=>{
    console.log(e)
    setError("Login failed");
  })
  
}

  return (

    <div className="container-fluid">
          <div className="login-form-card">
             <div className="login-form-header">
               <h2>Login</h2>
               <p>You must login first</p>
               {error() && <span className="form-error">{error()}</span>}
             </div>
             <form className="login-form" onsubmit={handleLogin}>
               <div className="form-group">
                 <label><i className="bi bi-person"></i>Username</label>
                 <input className="form-control" value={username()}  onInput={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
               </div>
               <div className="form-group">
                 <label><i className="bi bi-eye"></i>Password</label>
                 <input className="form-control" type="text" value={password()} onInput={(e) => setPassword(e.target.value)} placeholder="password"/>
               </div>
               <div className="form-group center">
                 <button className="btn btn-primary" >Login</button>
               </div>
               <div className="form-group center">
                 <a href="">Forgot Password</a>
               </div>
             </form>
          </div>
    </div>
  );
};

export default Login;