import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // pastikan Tailwind / CSS sudah import

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/gandul-gudang-sentosa/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
