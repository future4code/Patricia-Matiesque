import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";




class TripsDetails extends Component {

  

  render(){
    return (
      <div>
        <h1>details</h1>
        <button onClick={this.props.goToTripList}>Voltar</button>




      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToTripList: () => dispatch(push(routes.list)),

});



export default connect(null, mapDispatchToProps)(TripsDetails);
  