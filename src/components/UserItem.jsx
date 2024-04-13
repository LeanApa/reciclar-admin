import React from "react";
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
} from "@nextui-org/react";

const UserItem = ({ user }) => {
  const handleUpdate = () => {
    console.log("hola");
  };
  return (
    <Card className="max-w-[1000px] w-[600px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
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
          <Input type="email" label="Email" placeholder={user.email} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Input type="text" label="Edad" placeholder={user.age} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Input type="text" label="Ciudad" placeholder={user.city} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Input type="text" label="Dirección" placeholder={user.address} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Input type="text" label="Nivel" placeholder={user.level} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Input type="text" label="Rol" placeholder={user.role} />
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-wrap gap-4 items-center p-2">
          <Button
            size="lg"
            color="primary"
            variant="light"
            onClick={() => handleUpdate()}
          >
            Modificar
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center p-2">
          <Button size="lg" color="danger" variant="light" as={Link} href="/Usuarios">
            Cancelar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserItem;
