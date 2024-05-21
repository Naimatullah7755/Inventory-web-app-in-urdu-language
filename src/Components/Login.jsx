const Login = () => {
  return (
    <div>
    <div class="container">
             <div class="card">
            <h2>Welcome To Login Form</h2>
              <form>
           <input type="text" id="username" name="username" placeholder="Username" required />
         <input type="password" id="password" name="password" placeholder="Password" required/>
          {/*<button type="submit" onclick="func()">Submit</button>*/}
          <button >Login</button>
           <button >Forgot password</button>
             </form>
             </div>
             </div>
      {/*<button onClick={()=>{setIsLogin(true)}}>Login</button>*/}
    </div>
  );
};

export default Login;