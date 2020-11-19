const getDropDownInfo = (state = [], action) => {
    switch (action.type) {
        case 'GET_DROPDOWN_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default getDropDownInfo;