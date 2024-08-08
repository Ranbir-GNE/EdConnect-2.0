import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import "../../../../../public/sass/pages/auth.scss";
import Link from "next/link";
import SignUpForm from "./form";

const Login = () => {
  return (
    <div className="login-container">
      <Container>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="login-left">
              <div className="brand_logo">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="content">
                <h1>Login</h1>
                <p>If you already have an account</p>
                <p>
                  You can <Link href="/auth/login">Login here!</Link>
                </p>
              </div>
              <SignUpForm />
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="login-right">
              <div className="login-image">
                <Image
                  src="/images/graphic2.png"
                  alt="Login"
                  width={500}
                  height={500}
                />
              </div>
              <div className="right-text">
                <h2>Sign in to name</h2>
                <p>Lorem Ipsum is simply</p>
              </div>
              <div className="contact-info">
                <p>+94 0116 789 754</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
