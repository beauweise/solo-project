const edit = (state = {}, action) => {
    switch (action.type) {
      case 'CHANGE_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default edit;
  