import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = () => {
    const {setLoading} = useContext(AuthContext);
    const [newses , setNews] = useState([]);

    const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`news.json`);
          const data = await response.json();
          setNews(data);
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      };

    useEffect(()=>{
        // fetch(`news.json`)
        // .then(res=>res.json())
        // .then(data=>setNews(data));
        fetchData();
    },[]);
    return (<>
        {
            
            newses.map(news=>
                <div className='border rounded-md mb-3'>
                    <div className='bg-gray-100 px-5 py-4 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img className='w-9 rounded-full' src={news.author.img} alt="" srcSet="" />
                            <div>
                            <p className='text-sm font-semibold text-gray-700'>{news.author.name}</p>
                            <p className='text-xs text-gray-500'>{(news.author.published_date)?.split(' ')[0]}</p>
                            </div>
                        </div>
                        <div className='flex items-center text-2xl gap-2'>
                            <CiBookmark></CiBookmark>
                            <CiShare2></CiShare2>
                        </div>
                    </div>
                    <h3 className='px-5 py-3 text-xl text-gray-700 font-bold'>{news.title}</h3>
                    <img className='px-5' src={news.image_url} alt="" />
                    <p className='px-5 pt-3 text-gray-800 text-sm'>{(news.details)?.substr(0,230)+" "}<Link to={`news/${news._id}`}><span className='text-bold text-orange-600 inline-block hover:cursor-pointer'>...Read More</span></Link></p>
                    <div className='border-b mx-5 py-1'></div>
                    <div className='px-5 py-5 flex justify-between items-center'>
                        <div className='flex items-center'>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='ms-2 text-gray-700 text-sm'>{news.rating.number}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaEye className='text-xl'></FaEye>
                            <p className='ms-2 text-gray-700 text-sm'>{news.total_view}</p>
                        </div>
                    </div>

                </div>
            )
        }
    </>);
};

export default NewsCard;