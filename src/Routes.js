import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/auth/Login/Login';
import PublicRoute from './public_routes';
import PrivateRoute from './private_routes';
import Loader from './Shared/Loader';
import { useSelector } from "react-redux";
import Profile from "./Components/Profile";

function AppRoutes() {
  const loading = useSelector((state) => state.Loader.loading);
  return (
    <Router>
      <Loader loading={loading} />
      <Routes>
        <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/dashboard/:id" element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="*" element={<Navigate replace to="/Login" />} />
      </Routes>

    </Router>
  )
}
export default AppRoutes;