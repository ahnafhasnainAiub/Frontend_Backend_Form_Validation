import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./index.css";
import Contact from "./pages/Contact";
import Inquery from "./components/Inquery/Inquery";
import Service from "./pages/Service";
import CompleteProjects from "./pages/CompleteProjects";
import EmployeeForm from "./pages/EmployeeForm";
import Team from "./components/Strategies/Team";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";
import { AuthProvider } from "./store/auth";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

function App() {
  
  
  
  // const isLoggedIn = window.localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquery" element={<Inquery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<CompleteProjects />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute/> }>
           <Route path="/team" element={<EmployeeForm/>} />
           <Route path="/member" element={<Team/>} />
        </Route>

         
         
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/logout" element={<Logout/>} />
        
        </Routes>
        <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
