import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "../../../public/sass/pages/repocards.scss";

const ReputationCards = () => {
  return (
    <div className="outer_container">
      <div className="heading_container">
        <h2>Our Reputation</h2>
      </div>
      <Container>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card">
              <div className="card_image">
                <Image
                  src="/images/card1.svg"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="card_content">
                <h3>Best Services</h3>
                <p>
                  Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                </p>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card">
              <div className="card_image">
                <Image
                  src="/images/card1.svg"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="card_content">
                <h3>Best Teams</h3>
                <p>
                  Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                </p>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card">
              <div className="card_image">
                <Image
                  src="/images/card2.svg"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="card_content">
                <h3>Best Designs</h3>
                <p>
                  Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReputationCards;
