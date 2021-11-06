const initialMobiles = {
    noOfMobiles: 10,
}

export const mobileReducer = (state = initialMobiles, action) => {
    switch(action.type) {
        case 'BUY_MOBILE_SUCCESS':
          return {...state, noOfMobiles: state.noOfMobiles - 1};
        case 'SELL_MOBILE_SUCCESS':
          return {...state, noOfMobiles: state.noOfMobiles + 1};
        default:
          return state;
    }
}

// gh'' GH""