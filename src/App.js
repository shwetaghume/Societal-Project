import "./App.css";
import Footer from "./components/Footer/Footer";
// import Principal from "./components/Principal";
import Navbar from "./components/Navbar School/Navbar.js";

import Home from "./components/Home School/Home.js";
import Staff from "./components/Contact School/Staff.js";
import Admission from "./components/Admission School/Admission.js";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Faculty from "./components/Staff School/Faculty.js";
import { ToastContainer } from "react-toastify";
import About from "./components/School About/About.js";
import EventList from "./components/Event Gallery/EventList.js";

// import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        <LoadingBar
          color="#76ff03"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/gallery/event"
            element={<EventList setProgress={setProgress}></EventList>}
          ></Route>
          <Route
            path="/"
            element={<Home setProgress={setProgress}></Home>}
          ></Route>
          {/* <Route
            path="/gallery/event"
            element={<Gallary setProgress={setProgress}></Gallary>}
          ></Route> */}
          <Route
            path="/about"
            element={<About setProgress={setProgress}></About>}
          ></Route>
          {/* <Route
            path="/"
            element={<Principal setProgress={setProgress}></Principal>}
          ></Route> */}
          <Route
            path="/admission"
            element={<Admission setProgress={setProgress}></Admission>}
          ></Route>
          <Route
            path="/staff"
            element={<Faculty setProgress={setProgress}></Faculty>}
          ></Route>

          <Route
            path="/contact"
            element={<Staff setProgress={setProgress}></Staff>}
          ></Route>
         
          {/* <Route path="/About" element={<About></About>}></Route> */}
        </Routes>
        <Footer></Footer>
        {/* <Gallary></Gallary> */}
        {/* <Staff></Staff> */}
        {/* <Footer></Footer>    */}
        {/* <Admission></Admission> */}
        {/* <Principal></Principal> */}
      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Router>
  );
}

export default App;
