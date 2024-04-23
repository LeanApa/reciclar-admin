import "./App.css";
import NavBar from "./components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Empresas from "./pages/Empresas";
import Posts from "./pages/Posts";
import Reciclables from "./pages/Reciclables";
import LogIn from "./pages/LogIn";
import User from './pages/User'
import Post from './pages/Post'

function App() {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("accessToken");
  return (
    <NextUIProvider navigate={navigate}>
      <NavBar isLoggedIn={isLoggedIn}></NavBar>
      <main className="flex justify-center items-center h-screen">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/usuarios" element={<Usuarios isLoggedIn={isLoggedIn} />} />
          <Route path="/usuarios/:id" element={<User isLoggedIn={isLoggedIn} />} />
          <Route path="/empresas" element={<Empresas isLoggedIn={isLoggedIn} />} />
          <Route path="/posts" element={<Posts isLoggedIn={isLoggedIn}/>} />
          <Route path="/posts/:id" element={<Post isLoggedIn={isLoggedIn}/>} />
          <Route path="/posts/new" element={<Post isLoggedIn={isLoggedIn}/>} />
          <Route path="/reciclables" element={<Reciclables isLoggedIn={isLoggedIn} />} />
        </Routes>
      </main>
    </NextUIProvider>
  );
}

export default App;
