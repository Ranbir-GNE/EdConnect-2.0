import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OTPForm from "./form";
import Image from "next/image";


const OTPVerification = () => {
  return (
    <div className="base_container">
      <Container>
      <Row>
        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="left_container">
            <div className="content">
              <h1>OTP-Verification</h1>
            </div>
            <OTPForm />
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="right_container">
            <Image
              src="/images/graphic2.png"
              alt="OTP-Verification"
              width={500}
              height={500}
            />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default OTPVerification;
