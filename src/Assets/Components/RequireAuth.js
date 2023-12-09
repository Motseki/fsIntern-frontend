import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthDataContext from '../Contexts/AuthDataContext';

const RequireAuth = ({ component: Component }) => {
  const { contextData } = useContext(AuthDataContext);

  return contextData.isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default RequireAuth;
