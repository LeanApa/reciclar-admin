import React, { useState } from "react";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { ReciclarLogo } from "./ReciclarLogo";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor para autenticación
    console.log("Email:", email);
    console.log("Password:", password);
    // Luego puedes redirigir al usuario a la página principal, por ejemplo
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[full]">
        <CardHeader className="flex gap-3">
          <ReciclarLogo/>
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
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Input
              label="Contraseña"
              onChange={handlePasswordChange}
              fullWidth
              isRequired
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