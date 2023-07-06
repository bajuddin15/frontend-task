import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { UserState } from "../UserContext";

const Auth = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const { userInfo, setUserInfo } = UserState();

  useEffect(() => {
    if (userInfo?.name) {
      localStorage.setItem("user", userInfo);
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div className="auth-container">
      <div className="auth-left">
        <span className="auth-brand-logo">Board.</span>
      </div>
      <div className="auth-right">
        <div className="auth-right-container">
          <div
            className="auth-right-item"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span className="auth-name">Sign In</span>
            <span className="auth-desc">Sign in to your account</span>
          </div>
          <div className="auth-right-item auth-other">
            {/* <div className="sign-google">
              <FcGoogle size={24} />
              <span>Sign in with Google</span>
            </div>
            <div className="sign-apple">
              <BsApple size={24} />
              <span>Sign in with Apple</span>
            </div> */}

            <GoogleOAuthProvider clientId="92152613933-5nbrpvb1rokfpgjcfnar1i8dal07k1m8.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  var decoded = await jwt_decode(
                    credentialResponse?.credential
                  );
                  const { name, email, picture } = decoded;
                  const data = { name, email, picture };
                  setUserData(data);
                  setUserInfo(decoded);
                  console.log(decoded, "bajubhai,,,");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              ;
            </GoogleOAuthProvider>
          </div>
          <div
            className="auth-right-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}>
            <span>or</span>
          </div>
          <div
            className="auth-right-item auth-inputs"
            style={{ flexDirection: "column" }}>
            <div className="auth-input">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" />
            </div>
            <div className="auth-input">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div style={{ color: "rgb(6, 88, 209)" }}>Forgot password?</div>
            <button className="auth-btn">Sign In</button>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(153, 152, 152)",
            }}
            className="auth-right-item">
            Don't have an account?
            <span
              style={{
                color: "rgb(6, 88, 209)",
                // marginLeft: "-12px",
              }}>
              Register here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
