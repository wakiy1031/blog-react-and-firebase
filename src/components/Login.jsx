import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-2xl font-bold mb-4">ログインして始める</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={loginInWithGoogle}
      >
        Googleでログイン
      </button>
    </div>
  );
};
