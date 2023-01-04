import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
     const data = {
      email: email,
      password: password
     };
    
    axios.post("http://localhost:5000/api/user/login", data).then((response) => {
     if(response.data.error){
      alert(response.data.error);
     } else {
      //  navigate("/dashboard");
      // navigate.push("/dashboard");
      navigate("/dashboard", { replace: true });
     }
    });
    };

    return (
             <section>
                <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" >
                <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt=""  />
                        <h1 className="mb-2 text-2xl">Login</h1>
                        {/* <span className="text-gray-300">Enter Login Details</span> */}
                    </div>
                    <form action="#">
                        <div className="mb-4 text-l">
                        <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                         type="email" 
                         name="email" 
                         placeholder="email"
                         onChange={(event) => {
                          setEmail(event.target.value);
                        }} />
                        </div>

                        <div className="mb-4 text-l">
                        <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" 
                        type="Password" 
                        name="password" 
                        placeholder="password" 
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        />
                        </div>
                        <div className="mt-8 flex justify-center text-l text-black">
                        <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                        onClick={login}
                        >Login</button>
                        </div>
                        <div className="text-center">
                          Don't have an account?{"  "}
                          <Link
                            to="/register"
                            className="text-purple-600 text-xl font-bold italic hover:text-white duration-300 underline"
                          >
                            Register
                          </Link>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
)};

export default Login;
