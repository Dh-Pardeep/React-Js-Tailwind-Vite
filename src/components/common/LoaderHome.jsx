import React, { useEffect, useState } from "react";
// import Preloader_img from '../../assets/img/png/peloaderimg.png'
function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <div
          style={{ zIndex: "999999999" }}
          className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <div className=" relative flex justify-center items-center">
              {/* prelodaer img */}
              <img className="w-[100px] Preloader_img animation_preloader mx-auto " src={Preloader_img} alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;