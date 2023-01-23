import loginBg from "../assets/login.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const [isActive, setisActive] = useState(false)

    const handleRegister = () => {
        setisActive(!isActive)
    }

    return (
        <>

            <div style={{ backgroundImage: `url(${loginBg})`, height: "100vh" }} className="bg-center bg-no-repeat flex justify-center items-center">
                <h1 className="text-white text-4xl absolute top-8 left-8"><Link to="/">NPL.</Link></h1>

                <div className={` w-fit p-10 text-center h-fit bg-opacity-90 bg-white text-black ${isActive ? "hidden" : "block"}`}>
                    <h1 className="uppercase text-4xl mb-6">login</h1>
                    <div className="">
                        <p className="text-2xl">Have an account?</p>
                        <input type="email" name="email" className="block rounded-md my-6 p-3 text-sm outline-2 outline-cyan-400" placeholder="example@mail.com" />
                        <input type="password" name="password" className="block rounded-md my-6 p-3 text-sm outline-2 outline-cyan-400" placeholder="**********" />
                        <div className="mb-6">
                            <a href="#_" className="relative inline-flex items-center justify-center p-2 px-4 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease">Sign In</span>
                                <span className="relative invisible">Sign In</span>

                            </a></div>
                        <div className="flex justify-between text-sm"><span className=""><input type="checkbox" className="mr-1" />Remember Me?</span>
                            <a href="#_" className="hover:underline hover:text-red-400">Forgot Password</a></div>


                        <p className="my-4 text-sm">-Or Sign in With-</p>
                        <div className="flex justify-between my-6">
                            <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium  leading-6 text-white whitespace-no-wrap bg-cyan-600 border border-cyan-700 rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" data-rounded="rounded-md" data-primary="cyan-600" data-primary-reset="{}">
                                Facebook
                            </a>
                            <a href="#_" className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-6  text-white whitespace-no-wrap bg-cyan-600 border border-cyan-700 rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" data-rounded="rounded-md" data-primary="cyan-600" data-primary-reset="{}">
                                Twitter
                            </a>

                        </div>
                        <div>
                            <span className="mr-4">No account?</span>
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleRegister()}>Register</button>
                        </div>
                    </div>
                </div>

                <div className={` w-fit p-10 text-center h-fit bg-opacity-90 bg-white text-black ${isActive ? "block" : "hidden"} `}>
                    <p className="uppercase text-4xl mb-6"> Register</p>
                    <p className="text-2xl">
                        Create an account
                    </p>
                    <div>
                        <input type="email" placeholder="Enter your email" className="block rounded-md my-6 p-3 text-sm outline-2 outline-cyan-400" />
                        <input type="password" placeholder="Enter your password" className="block rounded-md my-6 p-3 text-sm outline-2 outline-cyan-400" />
                        <input type="password" placeholder="Confirm your password" className="block rounded-md my-6 p-3 text-sm outline-2 outline-cyan-400" />
                        <button type="button" class="focus:outline-none text-white bg-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-cyan-900">Register</button>
                    </div>

                    <p className="my-4 text-sm">-Or Sign up With-</p>
                    <div className="flex justify-between my-6">
                            
                            <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium  leading-6 text-white whitespace-no-wrap bg-cyan-600 border border-cyan-700 rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" data-rounded="rounded-md" data-primary="cyan-600" data-primary-reset="{}">
                                Facebook
                            </a>
                            <a href="#_" className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-6  text-white whitespace-no-wrap bg-cyan-600 border border-cyan-700 rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" data-rounded="rounded-md" data-primary="cyan-600" data-primary-reset="{}">
                                Twitter
                            </a>

                        </div>

                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleRegister()}>Login Now</button>

                </div>
            </div>
        </>
    );
}

export default Login;