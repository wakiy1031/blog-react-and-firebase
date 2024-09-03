import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-50">
      <p className="text-2xl font-bold mb-4 text-center">ログアウトする</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={logout}
      >
        ログアウト
      </button>
    </div>
  );
};
