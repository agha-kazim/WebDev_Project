import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img
              src="/JobPulse-logo.png"
              alt="logo"
              style={{ height: "300px", width: "400px" }}
            />
            <h3 style={{ color: "black" }}>Login to your account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label style={{ color: "black" }}>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="zk@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label style={{ color: "black" }}>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/jobpulse_login.png" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;


