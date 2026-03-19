
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ContactPage } from "./app/pages/ContactPage.tsx";
import "./styles/index.css";

// Simple client-side routing without React Router for now
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  
  // Check current path and render appropriate component
  const currentPath = window.location.pathname;
  
  if (currentPath === '/contact') {
    root.render(<ContactPage />);
  } else {
    root.render(<App />);
  }
}
  