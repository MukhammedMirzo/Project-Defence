import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Context/AuthContext";

import MainRouter from "./Routes/MainRouter";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AuthProvider>
      <Router className="">
        <div
          className={`${
            theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } min-h-screen`}
        >
          <Navbar />
          <main className="flex-grow p-4">
            <MainRouter />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
