import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logo.png"
const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      // Update the current date every second
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    // Function to format the day and date
    const formatDate = (date) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options); // undefined for default locale
    };
    return (
        <div className='text-center space-y-2 mt-3 mb-3'>
            <div className='flex justify-center'>
            <img  src={logo} alt="" srcSet="" />
            </div>
            <p>Journalism Without Fear or Favour</p>
            <h4>{formatDate(currentDate)}</h4>
        </div>
    );
};

export default Header;