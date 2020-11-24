const lakeFilter = (state = [], action) => {
    switch (action.type) {
      case 'RESET_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default lakeFilter;
  