import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userLogo from '../../../assets/user.png'
import Logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {
    const {user , logout } = useContext(AuthContext);
    const hendelLogout = () =>{
        logout().then(() => {
            console.log("Logout Success");
            toast.success("Logout Success..!!")
          }).catch((error) => {
            console.log("Logout unsuccessfull");
          });
    }
    return (
        <><div className='grid grid-cols-3 items-center  mt-3 '>
        <div className=''>
            <Link to="/"><img className='w-1/2' src={Logo} alt="" srcSet="" /></Link>
        </div>
        <div className=''>
            <ul className='flex justify-center  items-center list-none gap-3 font-semibold'>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Career</Link>
                </li>
            </ul>
        </div>
        <div className='flex items-center gap-3 justify-end'>
            <img className='w-10 rounded-full' src={user?.photoURL?user.photoURL:userLogo} alt="" srcSet="" />

            {
                user!==null? <button onClick={hendelLogout} className='btn btn-active'>Logout</button> : <NavLink to='/login'><button className='btn btn-active'>Login</button></NavLink>
                
            }
            
        </div>
    </div>
    <ToastContainer></ToastContainer>
    
    </>
    );
};

export default NavBar;