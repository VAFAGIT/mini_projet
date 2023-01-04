import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
    const initialValues = {
        email: "",
        name: "",
        password: "",
    };

    let navigate = useNavigate();

   const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(3).max(15).required("Required"),
    });

       const onSubmit = (data) => {
        axios.post("http://localhost:5000/api/user/register", data).then(() => {
            console.log(data);
            navigate("/");
        });
    };

    return (

    //     <main
    //     className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
    //     style={{
    //       backgroundImage: `url(${"background-image:url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')"})`,
    //     }}
    //   >

           <div>
             <Formik
                  initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema} 
                 
             >
              <section>
                <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
                <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" />
                        <h1 className="mb-2 text-2xl">Sign Up</h1>
                        {/* <span className="text-gray-300">Enter Login Details</span> */}
                    </div>
                    <Form action="#">
    
                       <div className="mb-4 text-l">
                        <Field className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="text" 
                        name="name" 
                        placeholder="name"
                      
                       />
                        </div>


                        <div className="mb-4 text-l">
                        <Field className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="text" 
                        name="email" 
                        placeholder="email"
                        
                       />
                        </div>

                        <div className="mb-4 text-l">
                        <Field className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" 
                        type="Password" 
                        name="password" 
                        placeholder="password" 
                       
                        />
                        </div>
                        <div className="mt-8 flex justify-center text-l text-black">
                        <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                       
                        >Register</button>
                        </div>
                        {/* <div className="text-center">
                        Don't have an account?{"  "}
                        <Link
                            to="/"
                            className="text-purple-600 text-xl font-bold italic hover:text-white duration-300 underline"
                        >
                            Login
                        </Link>
                        </div> */}
                    </Form>
                    </div>
                </div>
                </div>
                </section>
                </Formik>
        </div>
        // </main>
    );
}




export default Register;