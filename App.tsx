import React from 'react';
import { Routes } from './source/routes';
import { AuthProvider } from './source/hooks/AuthContext';

const App: React.FunctionComponent = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
