import React, { useContext, useState } from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import Header from '../Shared/Header/Header';
import BrakingNews from './BrakingNews';
import NavBar from '../Shared/NavBar/NavBar';
import NewsCard from '../NewsCard/NewsCard';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';


const Home = () => {
    const {loading} = useContext(AuthContext);
    
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <NavBar></NavBar>
            <div className='font-display grid grid-cols-4 gap-4 mt-6'>
                <div className='p-4'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2 p-2'>
                    {loading?<div className='flex justify-center mt-32'>
                    <span className="loading loading-bars loading-lg"></span></div>:<NewsCard></NewsCard>}
                </div>
                <div className='p-4'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;