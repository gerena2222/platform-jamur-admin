import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();
  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jamur.herokuapp.com/login', {
        username: username,
        password: password
      })
      router.push("/dashboard")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }

    }
  }
  return (
    <div className="bg-secondary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">Login</h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={Auth}>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputUsername" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                          <label htmlFor="inputUsername">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputPassword" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                        <p className="alert alert-primary" role="alert">
                          {msg}
                        </p>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="password.html">Forgot Password?</a>
                          <button className="btn btn-primary">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Login
