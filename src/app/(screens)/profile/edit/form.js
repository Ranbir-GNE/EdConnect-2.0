import Accordion from "react-bootstrap/Accordion";

const ProfileEditForm = () => {
  return (
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
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="submit_button">
                <button>Login</button>
              </div>
            </form>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProfileEditForm;
