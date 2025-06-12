import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Context/AuthContext";

import MainRouter from "./Routes/MainRouter";

const App = () => {
  return (
    <AuthProvider>
      <Router className="">
        <div className="flex flex-col min-h-screen">
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
