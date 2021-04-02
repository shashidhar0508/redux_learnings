import React from "react";
import { connect } from "react-redux";

class TrainerDetails extends React.Component {
  render() {
    if (!this.props.trainer) {
      return <h3>Select Trainer...</h3>;
    }
    return (
      <div>
        <img src={this.props.trainer.thumbnail} />
        <h2>
          {this.props.trainer.first}
          {this.props.trainer.last}
        </h2>
        <h3>Age: {this.props.trainer.age}</h3>
        <h3>Description: {this.props.trainer.description}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    trainer: state.activeTrainer,
  };
}

export default connect(mapStateToProps)(TrainerDetails);
