import "./App.css";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import Navbar from "./components/Navbar";
import Gallary from "./components/Gallary";
import Staff from "./components/Staff";
import Admission from "./components/Admission";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

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
            path="/Gallery"
            element={<Gallary setProgress={setProgress}></Gallary>}
          ></Route>
          <Route
            path="/"
            element={<Principal setProgress={setProgress}></Principal>}
          ></Route>
          <Route
            path="/Admission"
            element={<Admission setProgress={setProgress}></Admission>}
          ></Route>
          <Route
            path="/Contact"
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
    </Router>
  );
}

export default App;
