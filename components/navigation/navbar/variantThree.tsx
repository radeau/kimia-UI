import { useState } from "react";
import Navbar from "./index";

export const NavbarVariantThree = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Navbar.Toggler toggle={toggle} />
      <Navbar.Collapse isOpen={isOpen}>
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link>Home</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link>Documents</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link>React</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
