import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "../../../public/sass/pages/welcome.scss";
import { ArrowCircleRight, ArrowCircleLeft } from "@phosphor-icons/react";

const Welcome = () => {
  return (
    <>
      <div className="background_image">
        <Image
          src="/images/bg.png"
          alt="background image"
          width={1440}
          height={646}
        />
      </div>
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="base_container">
              <div className="left_quote_container">
                <div className="left_quote">
                  <h1>
                    Building <span>Communication</span>{" "}
                  </h1>
                  <h1>
                    is our <span>Mission.</span>
                  </h1>
                </div>
                <div className="left_quote_links">
                  <ul>
                    <li>
                      <div className="first_link">
                        <Link href="#">Get Started</Link>
                      </div>
                    </li>
                    <li>
                      <div className="second_link">
                        <Link href="#">Learn More</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right_quote_container">
                <div className="right_quote">
                  <h2>Future Projects</h2>
                  <p>Guru Nanak Dev Engineering College,Ludhiana</p>
                </div>
                <div className="bottom_container">
                  <div className="container_button">
                    <Link href="#">Back </Link>
                  </div>
                  <div className="container_button">
                    <Link href="#">Next </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
