import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('nav-fixed');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarClass('nav-fixed nav-active');
      } else {
        setNavbarClass('nav-fixed');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={navbarClass}>
      {/* your navbar content */}
    </nav>
  );
};

export default Navbar;