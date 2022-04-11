import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const optionLineOne = {
    fontSize: "10px",
  };
  const optionLineTwo = {
    fontSize: "13px",
    fontWeight: 800,
    textDecoration: "none",
    color: "white",
  };
  const logOutButton = {
    background: "#f0c14b",
    borderRadius: "2px",
    width: "100%",
    marginTop: "5px",
    borderColor: " #a88734 #9c7e31 #846a29",
    cursor: "pointer",
    textDecoration: "none",
  };
  const signIn = {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  };
  //   USER INFO
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  if (!user) {
    return (
      <>
        <div style={signIn}>
          <span style={optionLineOne}>Hello Guest</span>
          <Link to="/login">
            <span style={optionLineTwo}>Sign In</span>
          </Link>
        </div>
      </>
    );
  }
  return (
    <h5 style={{ display: "flex", flexDirection: "column" }}>
      <strong>{user && user.email}</strong>
      <button style={logOutButton} onClick={handleLogOut}>
        Logout
      </button>
    </h5>
  );
};

export default ProtectedRoute;
