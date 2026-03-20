
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import { ContactPage } from "./app/pages/ContactPage.tsx";
import "./styles/index.css";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
  