import "./App.css";
import NavBar from "./components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Empresas from "./pages/Empresas";
import LogOut from "./pages/LogOut";
import Posts from "./pages/Posts";
import Reciclables from "./pages/Reciclables";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <NavBar></NavBar>
      <main className="flex justify-center items-center h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/reciclables" element={<Reciclables />} />
        </Routes>
      </main>
    </NextUIProvider>
  );
}

export default App;
