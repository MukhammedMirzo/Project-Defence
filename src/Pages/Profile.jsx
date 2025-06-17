import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (!user) {
      const timer = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      const redirectTimer = setTimeout(() => {
        navigate("/login");
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  if (!user) {
    return (
      <p>
        You are not logged in, Redirecting to the Login page begins after
        {countDown}
        seconds...
      </p>
    );
  }
  return (
    <div>
      <h1>Welcome, {user.userName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
