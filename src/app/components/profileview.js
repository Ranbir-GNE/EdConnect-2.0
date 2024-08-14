import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/profileview.scss";

const ProfileView = () => {
  const profileDetails = [
    { label: "Age:", value: "" },
    { label: "Status:", value: "Regular" },
    { label: "Student:", value: "Day-Scholar" },
  ];

  const studentDetails = [
    { title: "Student Details", details: ["URN", "CRN", "Batch", "Programme", "Branch", "Class", "Section", "Semester"] },
    { title: "Academic Details", details: ["Attendance", "Current CGPA", "Last SGPA", "Mentoring Group", "Mentor Name", "Mentor Contact"] },
  ];

  const personalDetails = [
    { title: "Personal Details", details: ["Email", "Contact", "Blood Group", "Medical Conditions", "Father's Name", "Father's Contact", "Mother's Name", "Mother's Contact", "Address"] },
    {
      title: "Contact Us",
      details: [
        "College Website",
        "Address: Guru Nanak Dev Engineering College Gill Park, Gill Road, Ludhiana 141006, Punjab(India).",
        "Phone No. 0161 5064501",
        "Email: principal@gndec.ac.in",
        "Academic/Admission:0161 5064704",
        "Testing and Consultancy: 0161 5064709",
      ],
    },
  ];

  return (
    <div className="profile_outer_container">
      <Container>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
            <div className="profile_container_top ">
              <div className="profile_content">
                <div className="profile_image">
                  <Image src="/images/person.jpg" alt="ProfileView" width={150} height={150} />
                </div>
                <h2>Alice</h2>
                <p>Web Developer</p>
              </div>
              <div className="profile_details">
                {profileDetails.map((detail, index) => (
                  <p key={index}>{`${detail.label} ${detail.value}`}</p>
                ))}
              </div>
              <div className="performance_calender">
                
              </div>
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
            <Container>
              <Row>
                {[studentDetails, personalDetails].map((detailGroup, colIndex) => (
                  <Col key={colIndex} xxl={6} xl={6} lg={12} md={12} sm={12} xs={12}>
                    <div className="profile_container">
                      {detailGroup.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="student_details">
                          <h2>{section.title}</h2>
                          {section.details.map((item, itemIndex) => (
                            <p key={itemIndex}>{item}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileView;
