export default (state = null, action) => {
  switch (action.type) {
    case "TRAINER_SELECTED":
      console.log("action : ", action);
      // loading trainer details based on id in store
      return action.payload;
  }
  return state;
};

// "Actions" are going to pass the "payload" to the "reducer" by passing command called "store.dispatch("","")"
//duplicate actions will be overridden
