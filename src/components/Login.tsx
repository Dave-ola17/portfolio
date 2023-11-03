import { useState } from "react";
import axiosClient from "../axiosConfig/axios";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // logic for my login page
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const response = await axiosClient().post('/auth/login', {
                email, 
                password,
            });
            console.log('your loging was succesful, this is the response recived: ', response.data);
            localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
            
        }catch(error){
            console.log('Login failed: ', error)
        }
    }
  return (
    <div className="flex justify-center h-screen">
        {/* login form */}
        <div className=" rounded-md bg-white p-5 z-50 shadow-md w-[400px] h-1/2 mt-10">
            <h3 className="text-center font-bold text-red-600">LOGIN</h3>
            <form className="my-5"  onSubmit={handleLogin}>
                <div className="flex flex-col gap-2 my-5">
                    <label className="text-black" htmlFor="email">EMAIL: <span className="text-red-400">*</span></label>
                    <input 
                    className="border border-b-gray-400 outline-none" 
                    type="email" name="email" 
                    required 
                    placeholder="eg. John@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2 my-5">
                    <label className="text-black" htmlFor="password">PASSWORD: <span className="text-red-400">*</span></label>
                    <input 
                    className="border border-b-gray-400 outline-none" 
                    type="password" 
                    name="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="my-5 items-center justify-center">
                    <button 
                    className=" px-2 py-1 text-gray-50 bg-blue-500 hover:bg-red-600 transition duration-500 border-none rounded-md text-xl"
                    type="submit">
                        SUBMIT
                    </button>
                </div>
                <div className=" flex flex-row justfy-between ">
                    <h6>Do not have an account? </h6>
                    <a href="/Signup"><h6>Signup</h6></a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login