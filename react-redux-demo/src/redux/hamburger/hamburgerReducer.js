import { BUY_HAMBURGER } from "./hamburgerTypes";

const initialState = {
    numOfHamburgers: 15
}

const hamburgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_HAMBURGER: return {
            ...state,
            numOfHamburgers: state.numOfHamburgers-1
        }
        default: return state
    }
}

export default hamburgerReducer