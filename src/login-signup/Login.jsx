import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

export default function Login() {
    const [popup, setPopup] = useState({
        visible: false,
        message: '',
        success: false
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        rememberMe: false // Add rememberMe to state
    });

    const navigate = useNavigate();  

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/login', loginData);

            if (response.status === 200) {  
                const { token } = response.data; // Assume your backend returns a token
                
                // Save the token in localStorage or sessionStorage based on rememberMe
                if (loginData.rememberMe) {
                    localStorage.setItem('authToken', token); // Store in localStorage if "Remember Me" is checked
                } else {
                    sessionStorage.setItem('authToken', token); // Otherwise, store in sessionStorage
                }

                setPopup({ visible: true, message: 'Login Successfully!', success: true });
                setTimeout(() => {
                    navigate('/food');  
                }, 1000);
            } else {
                setPopup({ visible: true, message: response.data.error || 'Login Failed', success: false });
            }
        } catch (error) {
            setPopup({ visible: true, message: 'Invalid email or password', success: false });
        }

        // Reset login data only if successful
        setLoginData({
            email: '',
            password: '',
            rememberMe: false // Reset the checkbox as well
        });

        // Hide popup after 3 seconds
        setTimeout(() => {
            setPopup((prevPopup) => ({ ...prevPopup, visible: false }));
        }, 3000);
    }

    const handleLoginChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value // Handle checkbox state
        }));
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <form className='w-full h-full' onSubmit={handleLoginSubmit}>
                <div className='flex flex-col justify-center items-center h-full'>
                    
                    {/* Label */}
                    <h1 className='text-3xl p-6 font-semibold'>Log-In</h1>

                    {/* email */}
                    <div className='flex flex-col p-4 gap-3 w-80'>
                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium text-left'>E-mail:</label>
                            <input 
                                className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400' 
                                type='email' 
                                placeholder='xyz@gmail.com' 
                                name='email'
                                value={loginData.email} 
                                onChange={handleLoginChange} 
                                required
                            />
                        </div>

                        {/* password */}
                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium text-left'>Password:</label>
                            <input 
                                className='border-2 py-2 px-8 rounded-md focus:outline-none border-gray-400' 
                                type='password' 
                                placeholder='password' 
                                name='password'
                                value={loginData.password} 
                                onChange={handleLoginChange} 
                                required 
                            />
                        </div>
                    </div>

                    {/* Remember me */}
                    <div className='flex flex-row mb-3 gap-2'>
                        <input
                            type='checkbox' 
                            name='rememberMe' 
                            checked={loginData.rememberMe} 
                            onChange={handleLoginChange} 
                            className='rounded focus:outline-none border-gray-400 bg-blue-500'
                        />
                        <label className='font-medium'>Remember Me</label>
                    </div>

                    {/* Button */}
                    <Button>Log-in</Button>
                    {popup.visible && (
                        <div className={`p-5 rounded-md shadow-lg ${popup.success ? 'bg-green-200 text-green-800 border-green-600' : 'bg-red-200 text-red-800 border-red-600'}`}>
                            <p>{popup.message}</p>
                        </div>
                    )}

                    {/* signup if doesn't login */}
                    <div className='flex gap-4 mt-3'>
                        <p>Don't have an account?</p>
                        <Link className='font-normal underline hover:font-medium' to='/signup'> Signup </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
