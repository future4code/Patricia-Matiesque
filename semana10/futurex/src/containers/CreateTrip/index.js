import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { createTrip } from "../../action/index"

const formTrip = [
    {
      name: "name",
      type: "text",
      label: "Nome:",
      required: false,
    },
    {
      name: "date",
      type: "date",
      label: "Data: ",
      required: false,

    },
    {
      name: "description",
      type: "text",
      label: "Descrição",
      required: false,
    },
    {
      name: "durationInDays",
      type: "Number",
      label: "Duração",
      required: false,
    },
  ];


class CreateTrip extends Component {
    constructor(props){
        super(props);
        this.state = {
            form:{}
        }
    }

  
handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({ form: { ...this.state.form, [name]: value } });
};


  handleCreateTrip = (event) =>{
    event.preventDefault();
    const {name, planet, date, description, durationInDays} = this.state.form
    console.log(this.props.createTrip)
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
        <select name = "planet" value={this.state.form.planet} onChange={this.handleInputChange} id="planet">
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
        </select>
        <button onClick={this.handleCreateTrip}>Enviar</button>
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
  