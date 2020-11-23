const edit = (state = {}, action) => {
    switch (action.type) {
      case 'EDIT_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default edit;
  