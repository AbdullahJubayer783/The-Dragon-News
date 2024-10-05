import React, { useContext } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const Register = () => {
    const {createUser , loading ,setLoading} = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center mt-52'><span className="loading loading-ring loading-lg m-auto"></span></div>
    }
    const handelFormSubmitt = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        const image = formData.get('image');
        console.log(email,password,name,image);

        createUser(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user );
            toast.success("User Create Success..!!")
            
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            console.log(errorCode , errorMessage  );
            setLoading(false);
          });
    }

    
    return (
        <div>
            <div >
            <NavBar></NavBar>
            <h3 className='text-4xl font-bold text-center mt-6 mb-4'>Register Here</h3>
            {/* Login */}
            <div className=''>
            <form className="card-body w-1/2 m-auto" onSubmit={handelFormSubmitt}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image (Optional)</span>
                </label>
                <input type="file" className="file-input file-input-bordered  w-full " name='image'  />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                </div>


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
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                <p className='font-semibold text-center'>Already have an account? <span className='text-blue-600 font-bold'><Link to="/login">Login</Link></span></p>
            </form>
            </div>
                    
        </div>
        </div>
    );
};

export default Register;