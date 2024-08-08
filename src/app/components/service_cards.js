import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "../../../public/sass/pages/servicecards.scss";

const ServiceCards = () => {
  return (
    <div className="outer_container">
      <div className="heading_container">
        <h2>Our Services</h2>
      </div>
      <Container>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card1">
              <div className="card_image">
                <Image
                  src="/images/construction.png"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="line"></div>
              <div className="card_content">
                <h3>Construction</h3>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card2">
              <div className="card_image">
                <Image
                  src="/images/renovation.png"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="line"></div>
              <div className="card_content">
                <h3>Renovation</h3>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card1">
              <div className="card_image">
                <Image
                  src="/images/consultation.png"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="line"></div>
              <div className="card_content">
                <h3>Consultation</h3>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card2">
              <div className="card_image">
                <Image
                  src="/images/repair.png"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="line"></div>
              <div className="card_content">
                <h3>Repair Work</h3>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card1">
              <div className="card_image">
                <Image
                  src="/images/architecture.png"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="line"></div>
              <div className="card_content">
                <h3>Architecture</h3>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="card2">
              <div className="card_image">
                <Image
                  src="/images/electric.png"
                  alt="card_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="line"></div>
              <div className="card_content">
                <h3>Electric</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceCards;
