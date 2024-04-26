import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
  Avatar
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL;


const UserItem = ({ user, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [level, setLevel] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlelevelChange = (e) => setLevel(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${API_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "accessToken": `${isLoggedIn}`,
        },
        body: JSON.stringify({
          email: email,
          age: age,
          city: city,
          address: address,
          level: level,
          role: role,
        }),
      });
      const data = await response.json();
      navigate("/usuarios");
    } catch (error) {
      console.error(error);
    }

    // Luego puedes redirigir al usuario a la página principal, por ejemplo
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[1000px] w-[600px]">
        <CardHeader className="flex gap-3">
          <Avatar name={user.first_name}/>
          <div className="flex flex-col">
            <p className="text-md">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-small text-default-500">{user.email}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleEmailChange}
              type="email"
              label="Email"
              placeholder={user.email}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleAgeChange}
              type="text"
              label="Edad"
              placeholder={user.age}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleCityChange}
              type="text"
              label="Ciudad"
              placeholder={user.city}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleAddressChange}
              type="text"
              label="Dirección"
              placeholder={user.address}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handlelevelChange}
              type="text"
              label="Nivel"
              placeholder={user.level}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleRoleChange}
              type="text"
              label="Rol"
              placeholder={user.role}
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex flex-wrap gap-4 items-center p-2">
            <Button type="submit" size="lg" color="primary" variant="light">
              Modificar
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center p-2">
            <Button
              size="lg"
              color="danger"
              variant="light"
              as={Link}
              href="/Usuarios"
            >
              Cancelar
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default UserItem;
