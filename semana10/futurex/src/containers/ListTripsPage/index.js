import React from "react";
import { connect } from "react-redux";
import { getTrip } from '../../action'



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
        </div>
    );
   }
  }
  
  const mapStateToProps = state => ({
      trips: state.trips.allTrips
  })

  const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(getTrip())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ListTrips);
  