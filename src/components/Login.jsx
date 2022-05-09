import "./login.css";
import React, { useState } from "react";
//import { ColorButton } from "../ProdCard/popperprodcard";
//import { useDispatch, useSelector } from "react-redux";
//import { authFunction } from "../../Redux/login/action";
import { Navigate, useNavigate } from "react-router-dom";
//import Alert from "@mui/material/Alert";
//import CircularProgress from "@mui/material/CircularProgress";


export const Login = () => {
  const navigate=useNavigate()
  //const [userdata, setUser] = useState({ email: "", password: "" });
  //const { user, loading, error } = useSelector((store) => store.auth);

  //const dispatch = useDispatch();
  //const handleChange = (e) => {
  //  const { name, value } = e.target;
  //  setUser({ ...userdata, [name]: value });
  //};
  //if (user.token != undefined) {
  //  console.log(user._id);
  //  return <Navigate to={"/"} />;
  //}
  return (
    <div id="vinu">
      <div className="loginDiv">
      <img id="img" src="https://images-na.ssl-images-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg" alt="" />
        <h4>Log In to Your Zappos Account!</h4>
        <hr className="hr_line_login"></hr>

        {/* <div className="img_tag">
          <img
            src="	https://img-c.udemycdn.com/user/50x50/anonymous_3.png"
            alt=""
          />
          <p>Welcome back, {"vinu"}</p>{" "}
        </div> */}

        <div className="login_inputDiv">
          {/*{error ? (
            <Alert className="alert" severity="error">
              <p>There was a problem logging in.</p>
              <p>Check your email and password or create an account.</p>
            </Alert>
          ) : (
            <></>
          )}*/}
          <input
            //onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
            className="login_pw"
          ></input>
          <input
            //onChange={handleChange}
            name="password"
            type="password"
            placeholder="Passward"
            className="login_pw"
          ></input>
          
<input type="text" className="login" placeholder="Login" onClick={()=>{
  alert("Login successful !")
  navigate("/")
}}></input>
          {/* <button id="login_input">Log in</button> */}
          {/*<ColorButton
            onClick={() => {
              const URL = "http://localhost:3000/join/login-popup";
              dispatch(authFunction(userdata, URL));
            }}
            id="login_input"*/}
          {/*>*/}
            {/*{loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Log in"
            )}*/}
          {/*</ColorButton>*/}
        </div>

        <div className="forgot_pws">
          <span className="forgot_pw">or </span>
          <a href="#">Forgot Password</a>
          <div className="diff_acct">
            <a href="#">Log in</a>to a <a href="#">different account</a>
          </div>{" "}
        </div>

        <div className="login_org">
          <p>
            Don't have an account?{" "}
            <span>
              <a href="#">Sign up</a>
            </span>
          </p>
          {/* <a href="#" className="login_org1">
            Log in with your organization
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
