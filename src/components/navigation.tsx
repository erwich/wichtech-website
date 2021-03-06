import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
} from 'reactstrap'
import { useColorMode } from "theme-ui"
import Scroll from "react-scroll"

const ScrollLink = Scroll.ScrollLink

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [colorMode, setColorMode] = useColorMode()

  const toggle = () => setIsOpen(!isOpen)
  const onThemeChange = () => setColorMode(colorMode == "light" ? "dark" : "light")

  const themeBtnColor = colorMode == "dark" ? "white" : "black"

  return (
    <div>
      <Navbar
        className="bg-transparent"
        sticky="top"
        light={colorMode == "light"}
        dark={colorMode == "dark"}
        expand="md"
      >
        <NavbarBrand href="/">@ewich</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/donate">Donate</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button
              className="bg-transparent"
              style={{ color: themeBtnColor }}
              onClick={onThemeChange}
            >
              {colorMode == "dark" ? "Light Theme" : "Dark Theme"}
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
