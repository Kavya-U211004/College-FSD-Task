import { useState } from "react";
import Axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (name.length < 3 || !/^[A-Za-z\s]+$/.test(name)) {
      errors.name = "Name must be at least 3 characters and contain only letters";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const register = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      Axios.post("https://college-fsd-task.onrender.com/api/auth/register", {
        email: email,
        name: name,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        }
      });
    } else {
      setRegisterStatus("Please fix the validation errors.");
    }
  };

  let imgs = [
    "https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg",
  ];

  return (
    <div className="container" style={{ paddingTop: 60 }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
              </div>
              <h1 style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}>{registerStatus}</h1>

              {/* Name Input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label className="form-label">Name</label>
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* Email Input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  required
                />
                <label className="form-label">Email address</label>
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              {/* Password Input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
                <label className="form-label">Password</label>
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg" onClick={register}>
                  Sign Up
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Login to your account{" "}
                  <a href="login" className="link-danger">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={imgs[0]} className="img-fluid" alt="Signup Visual" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
