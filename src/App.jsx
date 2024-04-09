import "./App.css";
import NavBar from "./components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <NavBar></NavBar>
      <p>prueba de que funiona to3</p>
      <Routes>
        <Route path="/usuarios" element={<Usuarios/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
