import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone from '../../assets/qZone2.png'
import qZone2 from '../../assets/qZone3.png'
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider();

const RightSideNav = () => {
    const {googlePopup , user ,loading} = useContext(AuthContext);
    const handelGooglePopupLogin = () =>{
        googlePopup()
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("Login Successfull..!!")
          }).catch((error) => {
            toast.error("Some Error occerd..!!")
          });
    }

    return (<>
        {
            user?"":<div className='text-left space-y-3 mb-4'>
            <h4 className='font-bold text-2xl'>Login With</h4>
            <div className='btn btn-outline w-full' onClick={handelGooglePopupLogin}>
                <FaGoogle></FaGoogle> Sign with google
            </div>
            <div className='btn btn-outline btn-md w-full'>
                <FaGithub></FaGithub> Sign with Github
            </div>
         </div>
        }

        <div className='text-left mb-4'>
           <h4 className='font-bold text-2xl mb-3'>Find Us On</h4>
           <a className='text-xl flex items-center p-4 gap-2 border-2 rounded-t-lg' href="http://facebook.com" target="_blank" rel="noopener noreferrer">
           <FaFacebook></FaFacebook>
           <h5 className='font-medium'>Facebook</h5>
           </a>
           <a className='text-xl flex items-center p-4 gap-2 border-x-2' href="https://x.com/" target="_blank" rel="noopener noreferrer">
           <FaTwitter></FaTwitter>
           <h5 className='font-medium'>Twitter</h5>
           </a>
           <a className='text-xl flex items-center p-4 gap-2 border-2 rounded-b-lg' href="http://instagram.com" target="_blank" rel="noopener noreferrer">
           <FaInstagram></FaInstagram>
           <h5 className='font-medium'>Instagram</h5>
           </a>
        </div>

        {/* q zone */}

        <div className='mb-4 font-medium text-sm'>
           <h4 className='font-bold text-2xl mb-3'>Q Zone</h4>
           <div className='bg-gray-100 p-2 rounded'>
            <img src={qZone} alt="" srcSet="" />
            <p>Class Room</p>
            <img src={qZone2} alt="" srcSet="" />
            <p>Play Ground</p>
            <img src={qZone} alt="" srcSet="" />
            <p>Class Room</p>
           </div>
           
        </div>
    </>
    );
};

export default RightSideNav;