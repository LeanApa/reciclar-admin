import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleMenu} />
      <Drawer anchor="right" open={isOpen} onClose={toggleMenu}>
        <List>
          <ListItem button onClick={toggleMenu}>
            <CloseIcon />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Productos" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Servicios" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
