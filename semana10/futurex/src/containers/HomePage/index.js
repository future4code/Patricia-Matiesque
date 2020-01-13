import React from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router";

function Home (props) {
    return (
        <div></div>
    );
  }
  
const mapDispatchToProps = dispatch => ({
    goToApplicationForm: () => dispatch(push(routes.ApplicationForm)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),

  });

  export default connect(null, mapDispatchToProps)(Home);
  



