import { FormEvent, useState } from 'react'
import axiosClient from '../axiosConfig/axios';


const Signup = () => {
    const [formData, setFormData ] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    // logic for handling signup data collection from the form.
    const handleChange = (e:FormEvent) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };
    // logic for handling signup.
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        try{
            const response = await axiosClient().post('/auth/register', formData);
            alert('Your registation was successful');
            console.log('Registration Successful: ', response.data)
        }catch(error) {
            console.log('signup failed ', error);
        };
    };
  return (
    <div  className="flex justify-center h-screen">
        {/* Signup form */}
        <div className=" rounded-md bg-white p-[20px]  z-50 shadow-md w-[400px] h-3/4 mt-10">
            <h3 className="text-center font-bold text-red-600">Signup</h3>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="" htmlFor="firstname">FIRST NAME:</label>
                    <input 
                    className=" pl-2 pb-1 border border-b-gray-400 outline-none"  
                    type="text" 
                    name="firstname" 
                    required 
                    placeholder="John" 
                    value={formData.firstname}
                    onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="lastname">LAST NAME:</label>
                    <input 
                        className=" pl-2 pb-1 border border-b-gray-400 outline-none"  
                        type="text" 
                        name="lastname" 
                        required 
                        placeholder="Eg. Doe" 
                        value={formData.lastname}
                        onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">PHONE:</label>
                    <input 
                        className=" pl-2 pb-1 border border-b-gray-400 outline-none"  
                        type="number" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">EMAIL:</label>
                    <input 
                        className=" pl-2 pb-1 border border-b-gray-400 outline-none"  
                        type="email" 
                        required 
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">PASSWORD:</label>
                    <input 
                        className=" pl-2 pb-1 border border-b-gray-400 outline-none"  
                        type="password" 
                        name="password" 
                        required
                        value={formData.password}
                        onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">CONFIRM PASSWORD:</label>
                    <input 
                        className=" pl-2 pb-1 border border-b-gray-400 outline-none"  
                        type="password" 
                        name="password_confirmation" 
                        required
                        value={formData.password_confirmation}
                        onChange={handleChange} />
                </div>
                <div className="my-5 items-center justify-center">
                    <button type='submit' className=" text-gray-50 bg-blue-500 hover:bg-red-600 transition duration-500 border-none rounded-md text-xl">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup