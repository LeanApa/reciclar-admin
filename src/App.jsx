import "./App.css";
import NavBar from "./components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Empresas from "./pages/Empresas";
import LogOut from "./pages/LogOut";
import Posts from "./pages/Posts";
import Reciclables from "./pages/Reciclables";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <NavBar></NavBar>
      <p>prueba de que funiona to3</p>
      <Routes>
        <Route path="/usuarios" element={<Usuarios/>} />
        <Route path="/empresas" element={<Empresas/>} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/reciclables" element={<Reciclables/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
