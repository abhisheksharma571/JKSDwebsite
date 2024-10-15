import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Foot from "./components/Foot";
import Home from "./components/Home";
import ContactUs from "./pages/Contact/ContactUs";
import AboutUs from "./pages/About/AboutUs";
import Courses from "./pages/Courses/Courses";
import Services from "./pages/Services/Services";
import Blogs from "./pages/Blogs/Blogs";
import EnrollNow from "./pages/EnrollNow/Enroll";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Faq from "./pages/FAQ/Faq";
import TermAndConditions from "./pages/Policies/TermAndConditions";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import Topbenefits from "./pages/Blogspages/Topbenefits.jsx";
import Socialmedia from "./pages/Blogspages/Socialmedia.jsx";
import Robot from "./pages/Blogspages/Robot.jsx";
import DigitalMarketing from "./pages/Courses/DigitalMarketing.jsx";
import DataAnalytics from "./pages/Courses/DataAnalytics.jsx";
import BusinessAnalyst from "./pages/Courses/BusinessAnalyst.jsx";
import Embedded from "./pages/Courses/Embedded.jsx";
import GraphicDesigning from "./pages/Courses/GraphicDesigning.jsx";
import Iot from "./pages/Courses/Iot.jsx";
import Python from "./pages/Courses/Python.jsx";
import Robotics from "./pages/Courses/Robotics.jsx";
import Top10tool from "./pages/Blogspages/Top10tool.jsx";
import Iotc from "./pages/Blogspages/Iotc.jsx";
import Roboticsc from "./pages/Blogspages/Roboticsc.jsx";
import Paythonc from "./pages/Blogspages/Paythonc.jsx";
import Iotfiver from "./pages/Blogspages/Iotfiver.jsx";
import Clang from "./pages/Blogspages/clang.jsx";
import JobAssistance from "./pages/JobAssistance/JobAssistance.jsx";
import AllInternship from "./pages/Internship/AllInternship.jsx";
import SummerTrInfo from "./pages/Internship/SummerTrInfo.jsx";
import WinterTrInfo from "./pages/Internship/WinterTrInfo.jsx";
import CorporateTrInfo from "./pages/Internship/CorporateTrInfo.jsx";
import ProjectTrInfo from "./pages/Internship/ProjectTrInfo.jsx";

function App() {
  const isNotFoundPage =
    window.location.pathname === "/404" || window.location.pathname === "*";

  return (
    <Router>
      {!isNotFoundPage && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/enrollnow" element={<EnrollNow />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/termandcondition" element={<TermAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/businessanalyst" element={<BusinessAnalyst />} />
        <Route path="/topbenefits" element={<Topbenefits />} />
        <Route path="/top10tool" element={<Top10tool />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/dataanalytics" element={<DataAnalytics />} />
        <Route path="/embedded" element={<Embedded />} />
        <Route path="/graphicsdesigning" element={<GraphicDesigning />} />
        <Route path="/iot" element={<Iot />} />
        <Route path="/python" element={<Python />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/socialmedia" element={<Socialmedia />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/iotc" element={<Iotc />} />
        <Route path="/roboticsc" element={<Roboticsc />} />
        <Route path="/paythonc" element={<Paythonc />} />
        <Route path="/iotfiver" element={<Iotfiver />} />
        <Route path="/clang" element={<Clang />} />
        <Route path="/jobassistance" element={<JobAssistance />} />
        <Route path="/allinternship" element={<AllInternship />} />
        <Route path="/summerTrInfo" element={<SummerTrInfo />} />
        <Route path="/winterTrInfo" element={<WinterTrInfo />} />
        <Route path="/corporateTrInfo" element={<CorporateTrInfo />} />
        <Route path="/projectTrInfo" element={<ProjectTrInfo />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
      {!isNotFoundPage && <Foot />}
    </Router>
  );
}

export default App;
