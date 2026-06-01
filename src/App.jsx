import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './views/Home';
import Cart from "./views/Cart";
import Pizza from './views/Pizza';
import RegisterForm from './views/RegisterForm.jsx';
import LoginForm from './views/LoginForm.jsx';
import Profile from './views/Profile';
import NotFound from "./views/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div style={styles.wrapper}>
      <Navbar />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/pizza" element={<Pizza />} />
          <Route path="/pizza/:id" element={<Pizza />} />

          {/* RUTAS PÚBLICAS (solo si token es false) */}
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          />

          {/* RUTA PROTEGIDA (solo si token es true) */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
  },
};

export default App;
