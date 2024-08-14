"use client";
import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import "../../../public/sass/pages/navbar.scss";
import Link from "next/link";
import { useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const navLinks = [
    { href: "#", label: "Dashboard" },
    { href: "#", label: "Event Calendar" },
    { href: "#", label: "Online Session" },
    { href: "#", label: "Chat App" },
    { href: "#", label: "My Account" },
    { href: "#", label: "Settings" },
    { href: "#", label: "Logout" },
  ];

  return (
    <div className="header_section">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="navbar">
              <div className="navbar_brand">
                <Image
                  src="/images/logo.png"
                  alt="brand_logo"
                  width={500}
                  height={500}
                />
              </div>
              <div className="navbar_links">
                <ul>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="navbar_dropdown_icon"
                onClick={() => setShow(true)}
              >
                <PiHamburgerBold size={32} />
              </div>
              {show && (
                <>
                  <div className="navbar_dropdown_menu">
                    <ul>
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="close_icon" onClick={() => setShow(false)}>
                    <ImCross size={26} />
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
