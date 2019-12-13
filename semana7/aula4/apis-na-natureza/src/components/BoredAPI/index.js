import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "http://www.boredapi.com/api/activity";

class BoredAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentActivity: {},
            selectedActivityType: ""
        }
    }

    componentDidMount(){
        this.getRandomActivity();
    }
    

    getRandomActivity = async () => {
        const response = await axios.get(baseURL);
        this.setState({ currentActivity: response.data })
    }

    componentDidMount(){
        this.getType();
    }

    getType = async () => {
        const response = await axios.get(`${baseURL}?${this.state.selectedActivityType}`);
        this.setState({ selectedActivityType: response.data.type })
        console.log(this.state.selectedActivityType)
    }

    render() {
        return(
            <div>
                <button onClick={this.getRandomActivity}>Sortear atividade aleatória</button>
                <h1>Nome: { this.state.currentActivity.activity }</h1>
                <h2>Categoria: { this.state.currentActivity.type }</h2>
                <h3>Número de Participantes: { this.state.currentActivity.participants }</h3>
                <hr/>

                <div>
                    <select>
                        <option>{this.state.selectedActivityType}</option>
                    </select>
                </div>
            </div>

        )
    }
}

export default BoredAPI;