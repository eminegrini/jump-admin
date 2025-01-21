import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const isAuthenticated = false;

  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
            </ProtectedRoute>
          }
        />
        {/*         <Route
          path="rtl/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </ChakraProvider>
  );
}
