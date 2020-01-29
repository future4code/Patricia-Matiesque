import React from "react";
import { connect } from "react-redux";
import { getTrip } from '../../action'
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";


class ListTrips extends React.Component {


    componentDidMount(){
        this.props.fetchTrips()
    }

    render(){
    
    return (
        <div>
            <h1>Lista Viagens</h1>
            {this.props.trips.map((trip) =>
            <p>{trip.name}</p>  
            )}
        <button onClick={this.props.goToCreateTrip}>Cadastrar Trip</button>
        <button onClick={this.props.goToTripDetails}>Aprovar</button>
        <button onClick={this.props.goToLoginPage}>Voltar</button>

        </div>
    );
   }
  }
  
  const mapStateToProps = state => ({
      trips: state.trips.allTrips
  })

  const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(getTrip()),
    goToCreateTrip: () => dispatch(push(routes.createTrip)),
    goToTripDetails: () => dispatch(push(routes.details)),
    goToLoginPage: () => dispatch(push(routes.login)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ListTrips);
  