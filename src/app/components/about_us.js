import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "../../../public/sass/pages/aboutus.scss";
import Link from "next/link";

const About = () => {
  return (
    <div className="out_container">
      <Container>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="founder_image">
              <Image
                src="/images/person.jpg"
                alt="Founder's image"
                height={1804}
                width={1203}
                priority
              />
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="about_us_container">
              <div className="about_us_heading">
                <h2>About Us</h2>
              </div>
              <div className="about_us_content">
                <p>
                  For more than 30 years we have been delivering world-class
                  construction and we’ve built many lasting relationships along
                  the way. <br />
                  <br />
                  We’ve matured into an industry leader and trusted resource for
                  those seeking quality, innovation and reliability when
                  building in the U.S.
                </p>
              </div>
              <div className="about_us_know_more">
                <Link href="#">More on Our History</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
