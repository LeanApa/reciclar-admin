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

const apiUrl = import.meta.env.VITE_API_URL;

const PostItem = ({ post, isLoggedIn }) => {
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

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSubTitleChange = (e) => setSubTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleLevelChange = (e) => setLevel([e.currentKey]);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${apiUrl}/posts/${post._id}`, {
        method: "PUT",
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
      const data = await response.json();
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[1000px] w-[600px]">
        <CardHeader className="flex gap-3">
          <Avatar name={post.first_name} />
          <div className="flex flex-col">
            <p className="text-md">{post.title}</p>
            <p className="text-small text-default-500">{post.subtitle}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleTitleChange}
              type="text"
              label="Título"
              placeholder={post.title}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleSubTitleChange}
              type="text"
              label="Sub título"
              placeholder={post.subtitle}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleCategoryChange}
              type="text"
              label="Categoría"
              placeholder={post.category}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Input
              onChange={handleImageUrlChange}
              type="text"
              label="URL de imagen"
              placeholder={post.imageUrl}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Select
              items={levels}
              label="Nivel"
              placeholder={post.level}
              selectedKeys={level}
              onSelectionChange={handleLevelChange}
             /*  selectedKeys={[level]} */
              /* onChange={handleLevelChange} */
            >
              {levels.map((level) => (
                <SelectItem key={level.description}>
                  {level.description}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
            <Textarea
              onChange={handleContentChange}
              label="Contenido"
              placeholder={post.content}
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
              href="/posts"
            >
              Cancelar
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default PostItem;
