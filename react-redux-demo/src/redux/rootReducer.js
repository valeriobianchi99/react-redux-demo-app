import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import hamburgerReducer from "./hamburger/hamburgerReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    hamburger: hamburgerReducer,
    user: userReducer
})

export default rootReducer