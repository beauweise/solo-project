const addData = (state = [], action) => {
    switch (action.type) {
      case 'SET_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default addData;
  