import React from "react";
import { Nav, Image, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import "./TestNavbar.css";

const TestNavbar = ({ situationNo, testLength }) => {
  return (
    <Navbar
      style={{
        backgroundColor: "rgba(55, 61, 73, 0.975)",
      }}
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/" active>
        <Image src="/assets/logo2.png" height="50vh" width="50vw" />
      </Navbar.Brand>
      <Navbar.Brand>
        <Timer minutes={22} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto end-navbar">
          <Navbar.Brand>
            <p
              className="nav-position text-center mt-2 mr-3 free-navbar"
              style={{ fontWeight: "bold" }}
            >
              {situationNo} out of {testLength}
            </p>
          </Navbar.Brand>
          <Navbar.Brand href="/results">
            <Button variant="secondary">End My Test</Button>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <Navbar collapseOnSelect expand="lg" className="color-navbar">
    //   <Navbar.Brand href="/">
    //     <h3 className="free">WebWinners</h3>
    //   </Navbar.Brand>
    //   <Navbar.Brand>
    //     <Timer minutes={22} />
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse
    //     id="responsive-navbar-nav"
    //     className="justify-content-end"
    //   >
    //     <Navbar>
    //       <Navbar.Brand>
    //         <h2
    //           className="nav-position text-center mr-5"
    //           style={{ fontWeight: "bold" }}
    //         >
    //           {situationNo} out of {testLength}
    //         </h2>
    //       </Navbar.Brand>
    //       <Navbar.Brand href="/results">
    //         <Button
    //           variant="light"
    //           style={{ backgroundColor: "rgb(5, 94, 110)", color: " #b5e2f7" }}
    //         >
    //           End My Test
    //         </Button>
    //       </Navbar.Brand>
    //     </Navbar>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default TestNavbar;
