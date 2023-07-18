import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    setIsLoggedin(false);
    navigate("/signupButton");
  };

  window.onpopstate = () => {
    navigate("/profile");
  };

  // window.history = () => {
  //   navigate("/Profile");
  // };

  return (
    <>
      <div>WELCOME - {userName.name}</div>
      <div>
        <button onClick={handleLogout} type="submit">
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
