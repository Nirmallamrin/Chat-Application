import React from 'react'
import toast from 'react-hot-toast';
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router';
import { useAuthContext } from '../../context/AuthContext';

const LogoutBtn = () => {
  const { setAuthUser } = useAuthContext();

  const logoutHandle = () => {
    localStorage.removeItem("chat-user")
    setAuthUser(null)
    toast.success("Logged out successfully")
  }
  return (
    <div className="mt-auto">
      <Link to="/">
        <BiLogOut
          onClick={logoutHandle}
          className="h-6 w-6 text-white cursor-pointer" />
      </Link>
    </div>
  );
}

export default LogoutBtn
