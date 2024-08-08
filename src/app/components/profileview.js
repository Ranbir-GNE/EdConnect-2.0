import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/profileview.scss";
import Link from "next/link";

const ProfileView = () => {
  return (
    <div className="profile_outer_container">
      <Container>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
            <div className="profile_container_top ">
              <div className="profile_content">
                <div className="profile_image">
                  <Image
                    src="/images/person.jpg"
                    alt="ProfileView"
                    width={150}
                    height={150}
                  />
                </div>
                <h2>Alice</h2>
                <p>Web Developer</p>
              </div>
              <div className="profile_details">
                <p>Age:</p>
                <p>Status: Regular</p>
                <p>Student: Day-Scholar</p>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="profile_container">
              <div className="student_details">
                <h2>Student Details</h2>
                <p>URN: </p>
                <p>CRN: </p>
                <p>Batch: </p>
                <p>Programme: </p>
                <p>Branch: </p>
                <p>Class: </p>
                <p>Section: </p>
                <p>Semester: </p>
              </div>
              <div className="student_details">
                <h2>Accademic Details</h2>
                <p>Attendance: </p>
                <p>Current CGPA: </p>
                <p>Last SGPA: </p>
                <p>Mentoring Group </p>
                <p>Mentor Name: </p>
                <p>Mentor Contact: </p>
              </div>
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="profile_container">
              <div className="student_details">
                <h2>Personal Details</h2>
                <p>Email: </p>
                <p>Contact: </p>
                <p>Blood Group:</p>
                <p>Medical Conditions:</p>
                <p>Father's Name: </p>
                <p>Father's Contact: </p>
                <p>Mother's Name: </p>
                <p>Mother's Contact: </p>
                <p>Address: </p>
              </div>
              <div className="student_details">
                <h2>Contact Us</h2>
                <p>College Website</p>
                <p>
                  Address : Guru Nanak Dev Engineering College Gill Park, Gill
                  Road, Ludhiana 141006, Punjab(India).
                </p>
                <p>Phone No. 0161 5064501</p>
                <p>Email: principal@gndec.ac.in</p>
                <p>Academic/Admission:0161 5064704</p>
                <p>Testing and Consultancy: 0161 5064709</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileView;
