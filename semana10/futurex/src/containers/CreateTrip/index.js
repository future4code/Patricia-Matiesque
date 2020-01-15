import React, { Component } from "react";
import { connect } from "react-redux";


const formTrip = [
    {
      name: "username",
      type: "text",
      label: "Nome:",
      required: false,
      pattern: "[A-Za-z]{5,}"
    },
    {
      name: "date",
      type: "date",
      label: "Data: ",
      required: true,

    },
    {
      name: "description",
      type: "text",
      label: "Descrição",
      required: true,
      minValue: 30
    },
    {
      name: "durationInDays",
      type: "Number",
      label: "Duração",
      required: true,
      minValue: 50
    },
  ];


class CreateTrip extends Component {
    constructor(props){
        super(props);
        this.state = {
            form:{}
        }
    }

    render(){
    return (
    <form onSubmit={this.handleOnSubmit}>
            {formTrip.map(input => (
            <div key={input.name}>
            <label htmlFor={input.name}>{input.label}: </label>
            <input
            id={input.name}
            name={input.name}
            type={input.type}
            value={this.state.form[input.name] || ""}
            required={input.required}
            onChange={this.handleInputChange}
            pattern={input.pattern}
            />
           </div>
            ))}
        <label htmlFor="planet">Planeta:</label>
        <select id="planet">
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
        </select>
        <button type="submit">Enviar</button>
    </form>    
    );
  }
}
 
  export default connect(null, null)(CreateTrip);
  