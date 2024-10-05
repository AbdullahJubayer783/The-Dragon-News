import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
    const [category,setcategory] = useState([]);
    useEffect(()=>{
        fetch(`categories.json`)
        .then(res=>res.json())
        .then(data=>setcategory(data));
    },[])
    return (
        <div className='text-left'>
            <h4 className='font-bold text-2xl'>All Category</h4>
            <div className='ms-3 text-lg font-medium mt-3 space-y-2 mb-5'>
                {
                    category.map(cat=>
                        <Link className='block bg-gray-50 py-2 px-4 rounded-md hover:bg-gray-200 transition'>{cat.name}</Link>
                    )
                }
            </div>
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
    );
};

export default LeftSideNav;