import { Col, Container, Row } from "react-bootstrap";
import "../../../../../public/sass/dashboard/profile.scss";
import Calender from "@/app/components/calender";
import TimeTable from "@/app/components/timetable";
import ProgressChart from "@/app/components/progressChart";
import AttendanceChart from "@/app/components/attendance";
import Documents from "@/app/components/documents";
import ToDoList from "@/app/components/todoList";

const StudentDashboard = () => {
  return (
    <div className="student_daashboard_container">
      <Container>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Calender />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <TimeTable />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <ProgressChart />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <AttendanceChart />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Documents />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <ToDoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default StudentDashboard;
