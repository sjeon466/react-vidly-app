import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from"./input";

class Form extends Component {
  state = {
    data: { },
    errors: {}
    }
  };

  validate = () => {
    const options = {abortEarly : false};
    const {error} = Joi.validete(this.state.data, this.schema, options);
    if(!error) return null;

    const errors ={};

    for(let item of result.error.details){
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({name, value}) => {
    const obj = { [name] : value};
    const schema = { [name] : this.schema[name]};
    const {error} = Joi.validate(obj,schema);
    if(error) return null;
    return error.details[0].message;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors || {}});
    this.doSubmit();
  };


  handleChange = ({ currentTaget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] =errorMessage;
    else delete errors[input.name];

    const data = {
      ...this.state.data
    };

    data[input.name] = input.value;
    this.setState({ data, errors });
  };


  renderButton = label =>{
    <button 
    disabled={this.validate()}
    className="btn btn-primary">{label}</button>
  };

  renderInput(name, label, type= "text"){
    const { data, errors } = this.state;
    return (
    <Input
    type={type}
    name={name}
    value={data[name]}
    label={label}
    onChange={this.handleChange}
    error={errors[name]}
  />);
  }

}
 
export default Form;