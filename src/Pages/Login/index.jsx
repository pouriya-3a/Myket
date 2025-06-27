import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../Utils/AuthContext";

export default function Login({ handleType }) {
  const { handleToken, token } = useContext(authContext);
  const navigate = useNavigate();
  const [fields, setFields] = useState({ username: "", password: "" });
  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const [text, setText] = useState("برای ادامه به حساب کاربری خود وارد شوید");

  const handleLoginFetch = async (e) => {
    e.preventDefault();
    console.log(fields);
    try {
      const postFetch = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      const handlePost = await postFetch.json();
      handleToken(handlePost.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setText("نام کاربری یا رمز عبور اشتباه است! دوباره تلاش کنید");
    }
  };
  
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 py-6 px-8 text-white">
          <h1 className="text-2xl font-bold text-center">خوش آمدید</h1>
          <p className="text-center mt-2 text-blue-100">{text}</p>
        </div>

        <form onSubmit={handleLoginFetch} className="p-8">
          <div className="mb-6 relative">
            <label htmlFor="email" className="block text-gray-700 mb-2 text-right">
              آدرس ایمیل
            </label>
            <div className="relative">
              <input
                name="username"
                value={fields?.username}
                onChange={handleInput}
                type="text"
                id="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2 text-right">
              رمز عبور
            </label>
            <div className="relative">
              <input
                name="password"
                value={fields?.password}
                onChange={handleInput}
                type="password"
                id="password"
                placeholder="رمز عبور خود را وارد کنید"
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="mr-2 text-gray-700">
                مرا به خاطر بسپار
              </label>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                رمز عبور را فراموش کرده‌اید؟
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
