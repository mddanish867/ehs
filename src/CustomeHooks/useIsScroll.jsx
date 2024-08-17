import { useState, useEffect } from 'react';

const useIsScroll = () => {
  const [showBottomHeader, setShowBottomHeader] = useState(true);
  
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setShowBottomHeader(false);
      } else {
        // Scrolling up
        setShowBottomHeader(true);
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showBottomHeader;
};

export default useIsScroll;
