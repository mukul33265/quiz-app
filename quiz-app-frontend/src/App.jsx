import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Hero from "./component/hero";
import Pricing from "./component/pricing";
import Freetrail from "./component/freeTrail";
import { Routes, Route } from "react-router-dom";
import TestPortal from "./component/testportal";
import TestSeriesPage from "./component/testSeriesPage";
import TestPapersPage from "./component/testPapers";
import Result from "./component/resultPage";
import GoogleAuth from "./component/googleLogin";
import ProtectedRoute from "./utils/protectedRoute";
import NotFound from "./component/notFound";
import MyAttempts from "./component/myAttempt";
import TestReview from "./component/testReview";
import "antd/dist/reset.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div
    className="scroll-smooth"
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#0a0a0a",
        overflow: "auto",

      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero openLogin={() => setShowLogin(true)} />
                {/* MODAL */}
                {showLogin && (
                  <GoogleAuth onClose={() => setShowLogin(false)} />
                )}
              <Pricing />
              {/* <Freetrail /> */}
            </>
          }
        />

        <Route path="/auth/google" element={<GoogleAuth />} />
        <Route path="/auth/google" element={<GoogleAuth />} />
        <Route path="/my-attempt" element={
          <ProtectedRoute>
            <MyAttempts/>
          </ProtectedRoute>
          }/>
        <Route path="/testseries" element={
            <TestSeriesPage/>
          } />
        <Route path="/testseries/:id" element={ 
            <TestPapersPage/>
          }/>
        <Route path="/testpaper/:id" element={
          <ProtectedRoute>
            <TestPortal/>
          </ProtectedRoute>
          }/>
        <Route path="/result/:attemptId" element={
          <ProtectedRoute>
            <Result/>
          </ProtectedRoute>
          }/>
        <Route path="/review/:attemptId" element={
          <ProtectedRoute>
            <TestReview/>
          </ProtectedRoute>
        }/>

      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App; 