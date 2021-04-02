import React from "react";

//For connecting react with redux
import { connect } from "react-redux"; //npm install react-redux --save

import { bindActionCreators } from "redux"; //Invoke to all actions

import { selectTrainer } from "../actions/index";

class TrainerList extends React.Component {
  createListItems() {
    return this.props.trainers.map((trainer, index) => {
      console.log("trainer: ", trainer);
      return (
        <div>
          <h3 className="text-danger" onclick={() => this.props.st(trainer)}>
            {trainer.first}
            {trainer.last}
          </h3>
        </div>
      );
    });
  }

  render() {
    return <div>{this.createListItems()}</div>;
  }
}

//callback function1
// Whenever state changes this will be called
function mapStateToProps(state) {
  return { trainers: state.trainers };
}

//callback function2
//same like store.dispatch({type:"TRAINER_SELECTED",paylaod:""})
// When actions are clicked this will be called
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ st: selectTrainer }, dispatch);
}

//HOC
export default connect(mapStateToProps, matchDispatchToProps)(TrainerList);
