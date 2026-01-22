import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    emailError: null,
    passwordError: null,
  });

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setUser({ ...user, email: e.target.value });
      setLoginErrors({
        ...loginErrors,
        emailError:
          e.target.value.length == 0
            ? "Email is required"
            : !e.target.value.includes("@")
              ? "Email must contains @"
              : null,
      });
    } else if (e.target.name == "password") {
      setUser({ ...user, password: e.target.value });
      setLoginErrors({
        ...loginErrors,
        passwordError:
          e.target.value.length == 0
            ? "Password is required"
            : e.target.value.length < 8
              ? "Password length must be at least 8 characters"
              : null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("-----------input data-----------");
    console.log(user);
  };

  return (
    <>
      <div className="flex justify-center mx-auto w-9/12">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                    />
                    {loginErrors.emailError && (
                      <small className="text-sm text-red-500">
                        {loginErrors.emailError}
                      </small>
                    )}
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={(e) => handleChange(e)}
                    />
                    {loginErrors.passwordError && (
                      <small className="text-sm text-red-500">
                        {loginErrors.passwordError}
                      </small>
                    )}
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
