import React, { useState, useEffect } from 'react';
import { FiChevronsUp } from 'react-icons/fi';
const BackToTop = () => {

  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='back_to_top'>
        <FiChevronsUp className="fixed w-[40px] bottom-[20px] p-[9px] end-[20px] items-center h-[40px] justify-center z-[1000] cursor-pointer scrollTop text-white bg-[#F36A3E] rounded-[50%] transition-all duration-200 ease-in-out hover:bg-white hover:text-[#F36A3E] hover:shadow-[0px_4px_16px_0px] hover:shadow-[#F36A3E] sm:bottom-[30px] sm:w-[45px] sm:end-[30px]  md:bottom-[40px] md:w-[50px]  md:end-[40px]" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
      </div>
    </>
  );
}

export default BackToTop;