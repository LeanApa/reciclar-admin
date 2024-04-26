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

const ReciclableItem = ({ reciclable, isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (reciclable) {
        const response = await fetch(
          `${API_URL}/reciclables/${reciclable._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              accessToken: `${isLoggedIn}`,
            },
            body: JSON.stringify({
              title: title,
              imageUrl: imageUrl,
              description: description,
            }),
          }
        );
      } else {
        const response = await fetch(`${API_URL}/reciclables/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accessToken: `${isLoggedIn}`,
          },
          body: JSON.stringify({
            title: title,
            imageUrl: imageUrl,
            description: description,
          }),
        });
      }
      navigate("/reciclables");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[1000px] w-[600px]">
        <CardHeader className="flex gap-3">
          {!reciclable ? (
            <div className="flex p-1">
              <AddCircleIcon className="text-blue-600" />
              <p className="text-small p-1">Complete los siguietes campos: </p>
            </div>
          ) : (
            <>
              <Avatar name={reciclable?.title} />
              <div className="flex flex-col">
                <p className="text-md">{reciclable?.title}</p>
                <p className="text-small text-default-500">
                  {reciclable?.description}
                </p>
              </div>
            </>
          )}
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleTitleChange}
              type="text"
              label="Título"
              placeholder={reciclable?.title || "Ingrese un título"}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleImageUrlChange}
              type="text"
              label="URL de imagen"
              placeholder={reciclable?.imageUrl || "Ingrese una URL"}
            />
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Textarea
              onChange={handleDescriptionChange}
              label="Contenido"
              placeholder={reciclable?.description || "Escriba el contenido"}
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex flex-wrap gap-4 items-center p-2">
            {reciclable ? (
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
              href="/reciclables"
            >
              Cancelar
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ReciclableItem;
