import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi--browser";
class LoginForm extends Component {
  state = {
    account: { username : "", password: "" }
    errors: {
    }
  };

  schema = {
    username : Joi.string().required(),
    password : Joi.string().required()
  }

  validate = e => {
    const result = Joi.validete(this.state.account, this.schema);
    console.log(result);

    const errors = {};
    const {account } = this.state;

    if(account.username.trim() === '')
      errors.username = "Username is required.";

    if(account.password.trim() === '')
      errors.password = "Password is required.";

    return Object.key(errors).length === 0 ? null : errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors || {}});
    if(errors) return;

    console.log("Submitted");
  };

  validateProperty = ({name, value}) => {
    if(name === "username"){
      if(value.trim()=== "") return "Username is required";
      // other rules
    }

    if(name === "password"){
      if(value.trim()=== "") return "password is required";
      // other rules
    }
  };

  handleChange = ({ currentTaget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] =errorMessage;
    else delete errors[input.name];

    const account = {
      ...this.state.account
    };

    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
        </form>
        <button className="btn btn-primary">Login</button>
      </div>
    );
  }
}

export default LoginForm;


