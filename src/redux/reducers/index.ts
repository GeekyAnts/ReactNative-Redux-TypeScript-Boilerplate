const intialState = {
  data: ""
};

export default (state = intialState, action: any) => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        data: ""
      };
    default:
      return state;
  }
};
