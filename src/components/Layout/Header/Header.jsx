import React from "react";
import { Navbar, Nav, Form, Button, NavDropdown,Badge } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

const bookCategory = [
  { id: 1, name: "All" },
  { id: 2, name: "Fantasy" },
  { id: 3, name: "Horror" },
  { id: 4, name: "Romance" },
  { id: 5, name: "Science" },
  { id: 6, name: "Thriller" },
];

function Header() {
  return (
    <div className="header-container">
      <Navbar className="header" bg="#000" expand="lg">
        <Navbar.Brand>
          <Link to="/">logoicon</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="search">
            <Form.Control
              type="input"
              className="search__input"
              placeholder="Tìm kiếm khoá học của bạn"
            ></Form.Control>
            <i className="fa-solid fa-magnifying-glass search__icon"></i>
          </Form>
          <Nav className="navigation ">
            <Nav.Link as={NavLink} to="/">
              Trang chủ
            </Nav.Link>
            <NavDropdown title="Danh mục" id="basic-nav-dropdown">
              {bookCategory.map((e) => (
                <NavDropdown.Item as={NavLink} to={`/book/${e.id}`} key={e.id}>
                  {e.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={NavLink} to="blog">
              Bài viết
            </Nav.Link>
            <Nav.Link as={NavLink} to="about">
              Giới thiệu
            </Nav.Link>
          </Nav>
          <Nav className="navigation navigation__right">
            <Nav.Link as={NavLink} to="cart">
              <Button variant="link"><i className="fa-solid fa-shopping-cart"></i></Button>
              <Badge bg="primary">1</Badge>
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="login">
              <Button variant="primary">Đăng nhập</Button>
            </Nav.Link>  */}
            <Nav.Link as={NavLink} to="register">
              <Button variant="primary">Đăng ký</Button>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
