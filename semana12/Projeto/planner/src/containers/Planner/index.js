import React from "react";
import { connect } from "react-redux";
import CriarTarefas from "../CriarTarefas";
import Tarefas from "../Tarefas";

class Planner extends React.Component {
  render() {
    return <div>
      <CriarTarefas />
      <Tarefas />
    </div>
    
    
    ;
  }
}

export default connect()(Planner);
