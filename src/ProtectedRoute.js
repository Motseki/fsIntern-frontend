import React, { useContext } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
// import  AuthDataContext  from './AuthDataContext'; // Import the AuthDataContext
import AuthDataContext from './Assets/Contexts/AuthDataContext';

const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
  const { contextData } = useContext(AuthDataContext); // Get context data
  const isAuthenticated = contextData.isAuthenticated; // Get isAuthenticated from context
  const userRole = contextData.userRole; // Get user's role from context
  const navigate = useNavigate(); // Use useNavigate to navigate

  if (!isAuthenticated || userRole !== requiredRole) {
    // Redirect to the login page using useNavigate
    navigate('/login');
    return null; // Return null to prevent rendering the protected component
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;
