"use client";
const LoginForm = () => {
  return (
    <div className="form">
      <form>
        <div className="input_box">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input_box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="submit_button">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
