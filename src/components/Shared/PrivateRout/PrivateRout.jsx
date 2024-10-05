import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center mt-52'><span className="loading loading-ring loading-lg m-auto"></span></div>
    }
    if (user) {
        return children;
    }
    return (<Navigate state={location?.pathname} to='/login'></Navigate>
    );
};

export default PrivateRout;