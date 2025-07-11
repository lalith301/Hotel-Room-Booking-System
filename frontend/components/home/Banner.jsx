/**
 * @name Hotel Room Booking System
 * @author Lalithkishore
 * @description Hotel Room Booking and Management System Software ~ :)

 */

import React from 'react';

function Banner({ children, title, subtitle }) {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;
