import { addDoc, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, [navigate]);

  const createPost = async () => {
    if (!auth.currentUser) {
      alert("ログインしてください。");
      navigate("/login");
      return;
    }

    await addDoc(collection(db, "posts"), {
      title,
      content,
      author: {
        username: auth.currentUser.displayName || "匿名ユーザー",
        id: auth.currentUser.uid,
      },
    });

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-orange-50">
      <div className="w-1/2 p-4 rounded-md border-2 border-orange-200 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">記事投稿</h1>
        <div className="flex flex-col items-center justify-center h-full gap-4 border-2 border-orange-200 p-4 rounded-md">
          <input
            type="text"
            placeholder="タイトル"
            className="w-full p-2 rounded-md border-2 border-orange-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="記事の内容"
            className="w-full p-2 rounded-md border-2 border-orange-200"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="bg-orange-200 w-1/2 p-2 rounded-md hover:bg-orange-300 transition-colors duration-300"
            onClick={createPost}
          >
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};
