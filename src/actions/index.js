// Actions are functions - creating library to perform RESTful login
// we can write CRUD logic with axios, Thunk/saga here

export const selectTrainer = (trainer) => {
  // axios call with trainerId parameters

  // This is reducer expecting trainer details from 48 line of "trainer-list.js"
  // From here "TRAINER_SELECTED" reducer will be called from "reducer-active-trainer.js"
  return {
    type: "TRAINER_SELECTED",
    payload: trainer,
  };
};
