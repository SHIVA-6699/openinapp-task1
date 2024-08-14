import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_APP_GOOGLE_AUTH_CLIENT_ID}
    >
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
