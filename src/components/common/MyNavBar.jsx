import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
    if (window.innerWidth <= 768.98) {
      // If screen size is small or below, toggle the state and update body overflow
      sethead(!head);
      document.body.style.overflow = head ? "hidden" : "unset";
    }
  }
  return (
    <>
      <header className="relative z-[2] py-9">
        <div className="container xl:max-w-[1100px] mx-auto xl:px-0 px-3">
          <nav className="flex justify-between items-center relative z-40">
            <Link to='/'>
              <h3 className="sm:text-xmd text-sm text-000638 font-black leading-[100%] font-merriweather cursor-pointer">
                Food Ninja</h3>
            </Link>
            <div onClick={showUl} className="z-20 md:hidden">
              <h3 className="text-lg">
                {head ? <RxHamburgerMenu fontSize={35} /> : <RxCross2 fontSize={35} />}
              </h3>
            </div>

            <div
              className={`flex  flex-col md:flex-row fixed md:relative top-0 left-[-100%] md:left-0 duration-700 transition-all  justify-center md:justify-between
           items-center ${head ? "h-full w-full md:h-auto md:w-auto" : "!left-0 bg-white h-full w-full md:w-auto flex flex-col items-center justify-center"}`}
            >
              <ul className="flex gap-5 flex-col md:flex-row items-center">
                <li>
                  <Link to='/' onClick={showUl} className="relative after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] z-50 text-violet font-roboto text-sm leading-[100%] font-bold">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link onClick={showUl} className="relative after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] text-black font-roboto text-sm leading-[100%] font-normal">
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={showUl} className="relative after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] text-black font-roboto text-sm leading-[100%] font-normal">
                    Contact
                  </Link>
                </li>
                <li>
                  <button className="hover:bg-black hover:border-violet hover:text-white transition-all duration-300 border border-solid border-transparent text-sm font-roboto text-black font-normal leading-[100%] py-2 pb-[10px] px-[15px] rounded-[29px] bg-violet">Log in</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
};

export default MyNavBar;