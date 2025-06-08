import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";

// 处理GitHub Pages重定向
const root = createRoot(document.getElementById("root")!);
const renderApp = () => {
  root.render(
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
        <Toaster position="top-right" />
      </BrowserRouter>
    </StrictMode>
  );
};

if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  sessionStorage.removeItem('redirect');
  window.location.href = window.location.origin + redirect;
} else {
  renderApp();
}
