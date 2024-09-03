import React from "react";
import { Navigate , NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

function LogOut() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/logout");
  };
  return (
    <div>
    logout
    </div>
  );
}

export default LogOut;
