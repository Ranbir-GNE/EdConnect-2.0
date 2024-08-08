import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./form";
import Image from "next/image";
import "../../../../../public/sass/pages/auth.scss";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container">
      <Container>
        <Row>
          <Col  xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} >
            <div className="login-left">
              <div className="content">
                <div className="brand_logo">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </div>
                <h1>Sign in</h1>
                <p>If you don’t have an account register</p>
                <p>
                  You can <Link href="/auth/sign-up">Register here!</Link>
                </p>
              </div>
              <LoginForm />
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} >
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
