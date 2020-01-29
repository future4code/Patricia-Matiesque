import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router";
import { getTrip } from '../../action'

class Home extends Component {

  componentDidMount(){
    this.props.fetchTrips()
  }

  render(){
    return (
      <div>
        <h1>Home</h1>
        {this.props.trips.map((trip) =>
        <p>{trip.name} - {trip.description}</p> 
        )}
        <button onClick={this.props.goToLoginPage}>login</button>
        <button onClick={this.props.goToApplicationForm}>Candidatar</button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.allTrips
})
  
const mapDispatchToProps = dispatch => ({
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  goToLoginPage: () => dispatch(push(routes.login)),
  fetchTrips: () => dispatch(getTrip())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  



