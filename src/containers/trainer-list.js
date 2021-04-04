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
        <div key={index}>
          <h3 className="text-danger" onClick={() => this.props.st(trainer)}>
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
/* To get access to our state, we need to use a special function called "mapStateToProps". 
This function does exactly what it is named, 
map the state from the store object to the props object in your components. */
/* "mapStateToProps" function takes in the "state" of our application as a parameter
and returns an object with "keys of that object 
becoming the props of the component" so that whenever we use 
"this.props.key_name" we get back the state we need. */
function mapStateToProps(state) {
  console.log("state: ", state);
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
