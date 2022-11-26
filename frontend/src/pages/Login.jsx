import { FaSignInAlt } from "react-icons/fa";

function Login() {
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get support</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value=""
              onChange=""
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value=""
              onChange=""
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
