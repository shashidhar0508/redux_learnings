import React from "react";
import TrainerDetails from "../containers/trainer-details";
import TrainerList from "../containers/trainer-list";

export default function App() {
  return (
    <div>
      <h1>React-redux Demo by Shashidhar</h1>
      <TrainerList />
      <hr />
      <h2>Trainer Details</h2>
      <TrainerDetails />
    </div>
  );
}
