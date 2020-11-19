const getWindReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_WIND':
            return action.payload;
        default:
            return state;
    }
}

export default getWindReducer;