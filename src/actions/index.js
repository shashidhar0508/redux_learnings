// Actions are functions - creating library to perform RESTful login
// we can write CRUD logic with axios, Thunk/saga here

export const selectTrainer = (trainer) => {
  // axios call with trainerId parameters

  return {
    type: "TRAINER_SELECTED",
    payload: trainer,
  };
};
