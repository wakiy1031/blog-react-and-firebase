import React, { useEffect, useState } from "react";
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = query(collection(db, "posts"));
      const posts = await getDocs(snapshot);
      setPosts(posts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center min-h-screen bg-orange-50">
      <div className="w-1/2 p-4 rounded-md">
        <div className="flex flex-col justify-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full border-2 border-orange-200 p-4 rounded-md shadow-md mb-4 bg-white"
            >
              <h2 className="text-xl font-semibold mb-2 text-center border-b-2 border-orange-200 pb-2">
                {post.title}
              </h2>
              <p className="text-lg mb-4">{post.content}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  投稿者: {post.author?.username || "匿名ユーザー"}
                </p>
                {auth.currentUser &&
                  post.author?.id === auth.currentUser.uid && (
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
                      onClick={() => deletePost(post.id)}
                    >
                      削除
                    </button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
