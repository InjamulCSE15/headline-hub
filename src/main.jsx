import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/router';
import AuthProviders from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
