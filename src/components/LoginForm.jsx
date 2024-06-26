import React, { useState } from "react";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { ReciclarLogo } from "./icons/ReciclarLogo";
const API_URL = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${API_URL}/sessions/loginadmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.message) {
        setIsInvalid(true);
        setErrorMessage(data.message);
        return; // Salir de la función si hay un error
      } else {
        setIsInvalid(false);
        setErrorMessage("");
      }

      const { accessToken } = data;
      sessionStorage.setItem("accessToken", accessToken);
      navigate("/empresas");
    } catch (error) {
      console.error(error);
    }

    // Luego puedes redirigir al usuario a la página principal, por ejemplo
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[full]">
        <CardHeader className="flex gap-3">
          <ReciclarLogo />
          <div className="flex flex-col">
            <p className="text-md">Reciclar Admin</p>
            <p className="text-small text-default-500">Inicie sesión</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div style={{ marginBottom: "1rem" }}>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              isRequired
              fullWidth
              isInvalid={isInvalid}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Input
              label="Contraseña"
              onChange={handlePasswordChange}
              fullWidth
              isRequired
              isInvalid={isInvalid}
              errorMessage={errorMessage}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button type="submit" variant="light" color="primary" fullWidth>
            Iniciar sesión
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
