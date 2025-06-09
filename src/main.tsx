import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  </StrictMode>
);
