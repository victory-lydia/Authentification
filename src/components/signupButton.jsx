import React, { useState } from "react";
import { Link } from "react-router-dom";
import withRouter from "./withRouteer";

class SignupButton extends React.Component {
  // const navigate = useNavigate();
  // const [input, setInput] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const [message, setMessage] = useState("");
  // const [password, setPassword] = useState("");
  // // const [name, setName] = useState("");

  // window.onpopstate = () => {
  //   navigate("/signupButton");
  // };

  // // window.location = () => {
  // //   navigate("/SignupButton");
  // // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("user", JSON.stringify(input));
  //   navigate("/loginButton");
  // };

  // navigate = useNavigate();

  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      localStorage.setItem("user", JSON.stringify(this.state.input));
      const { navigate } = this.props;

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";

      this.setState({ input: input });

      navigate("/loginButton");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (typeof input["name"] !== "undefined") {
      const re = /^\S*$/;
      if (input["name"].length < 8 || !re.test(input["name"])) {
        isValid = false;
        errors["name"] = "Please enter valid name.";
      }
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 8) {
        isValid = false;
        errors["password"] = "Please add at least 8 charachter.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 ">
            Create an account
          </h1>

          <form className="mt-6" onSubmit={this.handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                name="name"
                value={this.state.input.name || ""}
                onChange={this.handleChange}
                type="text"
                // required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="name"
              />
              <div className="text-danger">{this.state.errors.name}</div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                name="email"
                value={this.state.input.email || ""}
                onChange={this.handleChange}
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="email"
              />
              <div className="text-danger">{this.state.errors.email}</div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                name="password"
                value={this.state.input.password || ""}
                onChange={this.handleChange}
                type="password"
                // required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="password"
              />
              <div className="text-danger">{this.state.errors.password}</div>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-purple-600">
                Submit
              </button>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Have an account?{" "}
              <Link
                to="/loginButton"
                className="font-medium text-purple-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupButton);
