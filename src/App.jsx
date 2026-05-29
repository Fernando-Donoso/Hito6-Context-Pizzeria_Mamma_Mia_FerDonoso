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

function App() {
  return (
    <div style={styles.wrapper}>
      <Navbar />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
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

export default App
