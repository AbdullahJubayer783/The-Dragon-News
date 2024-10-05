import React, { useContext } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signInUser , loading , setLoading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center mt-52'><span className="loading loading-ring loading-lg m-auto"></span></div>
    }
    const handelFormSubmitt = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email,password);

        signInUser(email,password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate(location?.state? location.state : '/')
            toast.success("Login Successfull..!!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            setLoading(false);
            toast.error("Invalid Credential..!!")
          });
    }
    return (
        <div >
            <NavBar></NavBar>
            <h3 className='text-4xl font-bold text-center mt-6 mb-4'>Welcome Back</h3>
            {/* Login */}
            <div className=''>
            <form className="card-body w-1/2 m-auto" onSubmit={handelFormSubmitt}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="current-password" placeholder="password" className="input input-bordered" name='password' required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                <p className='font-semibold text-center'>Don't have an account? <span className='text-blue-600 font-bold'><Link to="/register">Register</Link></span></p>
            </form>
            </div>
                    
        </div>
                
    );
};

export default Login;