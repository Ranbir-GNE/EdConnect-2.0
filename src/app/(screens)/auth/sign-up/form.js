"use client"
const SignUpForm = () => {
  return (
    <div className="form-signup">
      <form>
        <div className="input_box">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="input_box">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input_box">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input_box">
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div className="input_box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input_box">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="submit_button">
            <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;

