import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
  Avatar,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const API_URL = import.meta.env.VITE_API_URL;

const EmpresaItem = ({ empresa, isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [level, setLevel] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const levels = [
    { description: "PRINCIPIANTE" },
    { description: "INTERMEDIO" },
    { description: "AVANZADO" },
  ];

  const handleNameChange = (e) => setTitle(e.target.value);
  const handleEmailChange = (e) => setSubTitle(e.target.value);
  const handleHeadquartersChange = (e) => setCategory(e.target.value);
  const handleWebsiteChange = (e) => setImageUrl(e.target.value);
  const handleCuilChange = (e) => setLevel(e.currentKey);
  const handleDescriptionChange = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (empresa) {
        const response = await fetch(`${API_URL}/company/${empresa._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            accessToken: `${isLoggedIn}`,
          },
          body: JSON.stringify({
            name: title,
            email: subtitle,
            headquarters: category,
            website: imageUrl,
            cuil: level,
            description: content,
          }),
        });
      } else {
        const response = await fetch(`${API_URL}/company/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accessToken: `${isLoggedIn}`,
          },
          body: JSON.stringify({
            title: title,
            subtitle: subtitle,
            category: category,
            imageUrl: imageUrl,
            level: level,
            content: content,
          }),
        });
      }
      navigate("/empresas");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[1000px] w-[600px]">
        <CardHeader className="flex gap-3">
          {!empresa ? (
            <div className="flex p-1">
              <AddCircleIcon className="text-blue-600" />
              <p className="text-small p-1">Complete los siguietes campos: </p>
            </div>
          ) : (
            <>
              <Avatar name={empresa?.name} src={empresa.imageUrl} />
              <div className="flex flex-col">
                <p className="text-md">{empresa?.name}</p>
                <p className="text-small text-default-500">{empresa?.email}</p>
              </div>
            </>
          )}
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleNameChange}
              type="text"
              label="Nombre"
              placeholder={empresa?.name || "Ingrese un título"}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleEmailChange}
              type="text"
              label="Email"
              placeholder={empresa?.email || "Ingrese un subtítulo"}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleHeadquartersChange}
              type="text"
              label="Oficinas"
              placeholder={empresa?.headquarters || "Ingrese una categoría"}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleWebsiteChange}
              type="text"
              label="Website"
              placeholder={empresa?.website || "Ingrese una URL"}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleCuilChange}
              type="text"
              label="Cuil"
              placeholder={empresa?.cuil || "Ingrese una URL"}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Textarea
              onChange={handleDescriptionChange}
              label="Descripción"
              placeholder={empresa?.description || "Escriba el contenido"}
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex flex-wrap gap-4 items-center p-2">
            {empresa ? (
              <Button type="submit" size="lg" color="primary" variant="light">
                Modificar
              </Button>
            ) : (
              <Button type="submit" size="lg" color="primary" variant="light">
                Agregar
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-4 items-center p-2">
            <Button
              size="lg"
              color="danger"
              variant="light"
              as={Link}
              href="/empresas"
            >
              Cancelar
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EmpresaItem;
