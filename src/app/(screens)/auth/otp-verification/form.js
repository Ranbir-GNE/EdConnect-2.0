"use client";
const OTPForm = () => {
  return (
    <div className="form">
      <form>
        <div className="input_box">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input_box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input_box">
          <input type="tel" placeholder="OTP" />
        </div>
        <div className="submit_button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default OTPForm;
