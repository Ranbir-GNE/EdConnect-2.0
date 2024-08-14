"use client";
import Accordion from "react-bootstrap/Accordion";

const ProfileEditForm = () => {
  return (
    <div className="profile_edit_form_accordian">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Student Information</Accordion.Header>
          <Accordion.Body>
            <div className="form">
              <form>
                <div className="input_box">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Designation" />
                </div>
                <div className="submit_button">
                  <button>Save Changes</button>
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Student Details</Accordion.Header>
          <Accordion.Body>
            <div className="form">
              <form>
                <div className="input_box">
                  <input type="text" placeholder="URN" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="CRN" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Batch" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Programme" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Class" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Section" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Semester" />
                </div>
                <div className="submit_button">
                  <button>Save Changes</button>
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Academic Details</Accordion.Header>
          <Accordion.Body>
            <div className="form">
              <form>
                <div className="input_box">
                  <input type="text" placeholder="Attendance" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Current CGPA" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Last SGPA" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Mentoring Group" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Mentor Name" />
                </div>
                <div className="submit_button">
                  <button>Save Changes</button>
                </div>
              </form>
            </div>
          </Accordion.Body>{" "}
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Personal Information</Accordion.Header>
          <Accordion.Body>
            <div className="form">
              <form>
                <div className="input_box">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Contact" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Medical Conditions" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Father's Name" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Father's Contact" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Mother's Name" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Mother's Contact" />
                </div>
                <div className="input_box">
                  <input type="text" placeholder="Address" />
                </div>
                <div className="submit_button">
                  <button>Save Changes</button>
                </div>
              </form>
            </div>
          </Accordion.Body>{" "}
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProfileEditForm;
