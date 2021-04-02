import { combineReducers } from "redux";

import ActiveTrainerReducer from "./reducer-active-trainer";
import TrainerReducer from "./reducer-trainers";

const allReducers = combineReducers({
  trainers: TrainerReducer,
  activeTrainer: ActiveTrainerReducer,
});

export default allReducers;
