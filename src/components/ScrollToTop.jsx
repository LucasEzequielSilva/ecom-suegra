import React, { useState } from 'react';
import Button from './Button';

const ScrollToTopButton = ({show}) => {
  const [isShown, setIsShown] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setIsShown(scrollPosition > 300);
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Button
      show={show}
      onClick={handleButtonClick}
      style={{ display: isShown ? 'block' : 'none' }}
      aria-label="Scroll to top"
    >
      <i className="fas fa-chevron-up" />
    </Button>
  );
};

export default ScrollToTopButton;
