import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";   // ← IMPORTANTE
import { UserProvider } from "./contexts/UserContext.jsx";   // ← IMPORTANTE

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CartProvider>        {/* ← ENVUELVE TU APP */}
        <App />
      </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
