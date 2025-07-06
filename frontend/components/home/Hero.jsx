/**
 * @name Hotel Room Booking System
 * @author Lalithkishore
 * @description Hotel Room Booking and Management System Software ~ :)

 */

import React from 'react';

function Hero({ children, hero }) {
  return (
    <section className={hero}>
      {children}
    </section>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
