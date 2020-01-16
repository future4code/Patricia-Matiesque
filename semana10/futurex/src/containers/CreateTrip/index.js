import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";


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


  handleCreatTrip = () =>{
    const {name, planet, date, description, durationInDays} = this.state.form
    console.log(this.state.form)
    this.props.createTrip(name, planet, date, description, durationInDays)   
  }  
    render(){
    return (
    <form>
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
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
        </select>
        <button onClick={this.handleCreatTrip}>Enviar</button>
        <button onClick={this.props.goToTripList}>Voltar</button>
    </form>    
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToTripList: () => dispatch(push(routes.list)),
  createTrip:(name, planet, date, description, durationInDays) => dispatch(createTrip(name, planet, date, description, durationInDays))
});

 
  export default connect(null, mapDispatchToProps)(CreateTrip);
  