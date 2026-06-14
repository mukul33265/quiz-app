import React, { useEffect, useState } from "react";
import examIcon from "../assets/examIcon.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getUser } from "../utils/auth";

function Hero({ openLogin }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    // Listen for storage changes (login/logout from other tabs or components)
    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token");
      setToken(newToken);
      setUser(newToken ? getUser() : null);
    };

    window.addEventListener("storage", handleStorageChange);

    // Also set user on component mount
    if (token) {
      setUser(getUser());
    }

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [token]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);

      toast.success("Logged out successfully 👋");

      navigate("/"); // redirect to home or login page
    } catch (err) {
      console.log(err);
      toast.error("Logout failed ❌");
    }
  };

   const handleStartTest = (paperId) => {
    const confirmed = window.confirm( "Are you sure you want to start the test?\n\nThe timer will start immediately.") ;

    if(confirmed) {
      navigate(`/testpaper/${paperId

      }`)
    }
  };
  const TESTID = '6a2e1c3490e931ff98ca733b'; 
  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          *{
            font-family: "Poppins", sans-serif;
          }`}
      </style>

      <section className="relative flex flex-col items-center text-white text-sm pb-10">
        <nav className="z-50 flex items-center justify-between w-full py-4 mt-5 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur">
          <div className="flex items-center gap-3">
            <img
              src={examIcon}
              alt="ExamAce Logo"
              className="w-11 h-11 object-contain"
            />

            <span className="text-2xl font-bold  text-green-400 hover:text-green-700">
              ExamAce
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 transition duration-500 border border-green-900 bg-green-950 px-10 py-3 rounded-full">
            {token ? (
              <button
                onClick={() => handleLogout()}
                className="text-sm text-slate-50 hover:text-slate-300 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={openLogin}
                className="text-sm text-slate-50 hover:text-slate-300 transition"
              >
                Login
              </button>
            )}

            <a
              href="#pricing"
              className="text-sm text-slate-50 hover:text-slate-300 transition"
            >
              Pricing
            </a>
            <a
              href="/my-attempt"
              className="text-sm text-slate-50 hover:text-slate-300 transition"
            >
              My Attempts 
            </a>
          </div>
          <div>
           {token ? (
            <span
                className="hidden md:block bg-green-600 active:scale-95 hover:bg-green-700 transition px-6 py-2 text-slate-50 rounded-full cursor-pointer"
                
              >
                {user?.name}
              </span>
           ) :  (
            <button onClick={openLogin}
                className="hidden md:block bg-green-600 active:scale-95 hover:bg-green-700 transition px-6 py-2 text-slate-50 rounded-full cursor-pointer"
                
              >
                SignUp
              </button>
           )} 
              
        
          </div>

          <button
            id="open-menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden active:scale-90 transition"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </nav>
        {/* --------Mobile Navbar ------------ (bugggg) */}
        <div
          id="mobile-navLinks"
          aria-hidden={!mobileOpen}
          className={`fixed inset-0 z-100 bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {token ? (
              <button  onClick={() => {
                handleLogout(),
                setMobileOpen(false) }
              }>
                Logout
              </button>
          ) : (
              <button  onClick={() => {
                openLogin(),
                setMobileOpen(false) }
              }>
                Login
              </button>
          )}
          
          <button href="#pricing"  onClick={() => setMobileOpen(false)}>
            Pricing
          </button>
          <a href="/my-attempt" onClick={() => setMobileOpen(false)}>
            My Attempts
          </a>

          <button
            id="close-menu"
            onClick={() => setMobileOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-black hover:bg-slate-200 transition text-black rounded-md flex"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <h1 className="text-center text-4xl leading-tight md:text-6xl/18 mt-12 font-semibold max-w-2xl px-4 ">
          Crack your exam. Practice smarter, not harder.
        </h1>
        <p className="text-center text-sm md:text-base/7 text-slate-200 max-w-md mt-2 px-4">
          India's most focused test series for MET. Full-length mocks,
          topic-wise tests, and detailed analytics — all in one place.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={() => navigate("/testseries")}
            className="bg-green-600 hover:bg-green-700 text-slate-50 rounded-full px-7 py-3 cursor-pointer"
          >
            Browse test series
          </button>
          <button className="flex items-center gap-2 border border-green-900 hover:bg-green-950 transition rounded-full px-6 py-3 text-slate-200 cursor-pointer">
            <button onClick={() => {handleStartTest(TESTID)}}>View free tests</button>
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

        {/* <p className="text-slate-400 mt-20 md:mt-25"></p> */}
      </section>
    </>
  );
}

export default Hero;
