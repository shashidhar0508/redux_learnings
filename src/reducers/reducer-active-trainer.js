export default (state = null, action) => {
  switch (action.type) {
    case "TRAINER_SELECTED":
      // loading trainer details based on id in store
      return action.paylaod;
  }
  return state;
};

//duplicate actions will be overridden
