const initialMobiles = {
    noOfMobiles: 10,
    users: [],
}

export const mobileReducer = (state = initialMobiles, action) => {
    switch(action.type) {
        case 'BUY_MOBILE_SUCCESS':
          return {...state, noOfMobiles: state.noOfMobiles - 1};
        case 'SELL_MOBILE_SUCCESS':
          return {...state, noOfMobiles: state.noOfMobiles + 1};
        case 'GET_ALL_USERS_SUCCESS':
          return {...state, users:action.data};
        case 'GET_ALL_USERS_FAILED':
          return {...state, message:action.message};
        default:   
          return state;
    }
}

// gh'' GH""