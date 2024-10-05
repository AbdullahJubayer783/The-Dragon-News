import React from 'react';
import { Link, NavLink, useLoaderData, useLocation, useParams } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import { CiCalendar } from 'react-icons/ci';

const NewsDetails = () => {
    const {newsId} = useParams();
    const news = useLoaderData();
    
    const aNews = news.find(ns => ns._id === newsId);
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 gap-3 mt-4">
                <div className='col-span-3'>
                    <div className='border rounded-lg p-5 space-y-4 mb-7'>
                        <img src={aNews.image_url} alt="" />
                        <h3 className='text-2xl text-gray-700 font-bold'>{aNews.title}</h3>
                        <p className='text-gray-700'>{aNews.details}</p>
                        <Link to='/'><button className='btn btn-error text-white mt-4'>{"<"} All news in this category</button></Link>
                    </div>
                    <h3 className='font-bold text-3xl my-4'>Editors Insight</h3>
                    <div className='flex justify-evenly items-center gap-4'>
                    <div className='mt-3'>
                        <img src={one} alt="" srcSet="" />
                        <h5 className='font-bold mt-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                        <div className='flex items-center justify-between text-sm mt-3'>
                            <p>Education</p>
                            <div className='flex items-center gap-2'>
                            <CiCalendar></CiCalendar>
                                Jan 3, 2024
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <img src={two} alt="" srcSet="" />
                        <h5 className='font-bold mt-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                        <div className='flex items-center justify-between text-sm mt-3'>
                            <p>Education</p>
                            <div className='flex items-center gap-2'>
                            <CiCalendar></CiCalendar>
                                Jan 3, 2024
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <img src={three} alt="" srcSet="" />
                        <h5 className='font-bold mt-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                        <div className='flex items-center justify-between text-sm mt-3'>
                            <p>Education</p>
                            <div className='flex items-center gap-2'>
                            <CiCalendar></CiCalendar>
                                Jan 3, 2024
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="text-center">
                    <RightSideNav></RightSideNav>
                </div>
                
            </div>
            
        </>
    );
};

export default NewsDetails;