import { useState } from "react";
import Navbar from "./index";

export const NavbarVariantOne = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="bg-indigo-900">
      <Navbar.Brand>
        <svg
          height="25"
          preserveAspectRatio="xMidYMid"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 153.6"
        >
          <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
            <stop offset="0" stopColor="#2298bd" />
            <stop offset="1" stopColor="#0ed7b5" />
          </linearGradient>
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
            fill="url(#a)"
          />
        </svg>
      </Navbar.Brand>
      <Navbar.Toggler toggle={toggle} />
      <Navbar.Collapse isOpen={isOpen}>
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link>Home</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
        <Navbar.Nav right>
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
