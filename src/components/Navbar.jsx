import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ isAuth }) => {
  return (
    <nav className="flex justify-center items-center h-16 bg-orange-200 gap-16">
      <Link to={"/"}>ホーム</Link>
      {!isAuth ? (
        <Link to={"/login"}>ログイン</Link>
      ) : (
        <>
          <Link to={"/createpost"}>記事投稿</Link>
          <Link to={"/logout"}>ログアウト</Link>
        </>
      )}
    </nav>
  );
};
