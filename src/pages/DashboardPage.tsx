import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/useAuth";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import TaskIcon from "@material-ui/icons/Assignment";
import InfoIcon from "@material-ui/icons/Info";
import ActivityIcon from "@material-ui/icons/History";

const DashboardPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    console.log("Logout button clicked");
    logout();
    navigate("/signin");
  };

  return (
    <div>
      {/* AppBar for the header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1 className="text-lg">Welcome to the Dashboard, {user?.name}!</h1>
        <button
          onClick={handleLogout}
          className="bg-transparent border border-white text-white px-4 py-2 rounded transition hover:bg-gray-700"
        >
          <LogoutIcon className="inline-block mr-1" /> Logout
        </button>
      </header>

      {/* Main content container */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Recent Activity */}
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-lg font-semibold flex items-center">
              <ActivityIcon className="mr-2" /> Recent Activity
            </h2>
            <ul className="mt-2">
              <li>User {user?.name} logged in.</li>
            </ul>
          </div>

          {/* Account Information */}
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-lg font-semibold flex items-center">
              <InfoIcon className="mr-2" /> Account Information
            </h2>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
          </div>

          {/* Tasks */}
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-lg font-semibold flex items-center">
              <TaskIcon className="mr-2" /> Tasks
            </h2>
            <ul className="mt-2">
              <li>Complete task A</li>
              <li>Review project proposal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
