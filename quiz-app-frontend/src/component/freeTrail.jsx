import React from "react";
import { useNavigate } from "react-router-dom";
function Freetrail() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate() ;
   const handleStartTest = (paperId) => {
    const confirmed = window.confirm( "Are you sure you want to start the test?\n\nThe timer will start immediately.") ;

    if(confirmed) {
      navigate(`/testpaper/${paperId}`)
    }
  };
  const TESTID = '6a2d0aaddcd4767644f363f5'; 
  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          *{
            font-family: "Poppins", sans-serif;
          }`}
      </style>

      <section className="relative flex flex-col items-center text-white text-sm pb-10" id="freetrail">

        <h1 className="text-center text-4xl leading-tight md:text-6xl/18 mt-12 font-semibold max-w-2xl px-4 ">
          Excel your preparation. 
        </h1>

        <div className="flex items-center gap-4 mt-10">
          <button onClick={() => {handleStartTest(TESTID)}}
          className="flex items-center gap-2 border border-green-900 hover:bg-green-950 bg-green-700 transition rounded-full px-6 py-3 text-white-200 cursor-pointer">
            <span>View free tests</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
     
      </section>
    </>
  );
}

export default Freetrail;
