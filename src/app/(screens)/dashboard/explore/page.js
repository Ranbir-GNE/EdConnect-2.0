import { Col, Container, Row } from "react-bootstrap";
import "../../../../../public/sass/dashboard/profile.scss";
import Calender from "@/app/components/calender";
import TimeTable from "@/app/components/timetable";

const StudentDashboard = () => {
  return (
    <div className="student_daashboard_container">
      <Container>
        <Row>
          <Col xxl={4} xl={4} lg={6} md={6} sm={12} xs={12}>
            <Calender />
          </Col>
          <Col xxl={4} xl={4} lg={6} md={6} sm={12} xs={12}>
            <TimeTable />
          </Col>
          <Col xxl={4} xl={4} lg={6} md={6} sm={12} xs={12}>
            <Calender />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default StudentDashboard;
