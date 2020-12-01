const lakeFilter = (state = [], action) => {
    switch (action.type) {
      case 'RESET_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default lakeFilter;
  