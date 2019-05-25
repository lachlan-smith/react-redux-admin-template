import { 
    USER_MENU_OPEN 
} from "../constants/actionTypes";

const initialState = {
    userMenuOpen: false
};

export default function menu(state = initialState, action) {
    switch(action.type)
    {
        case USER_MENU_OPEN:
        {
            return Object.assign({}, state, {
                userMenuOpen: !state.userMenuOpen
            });
        }
        default:
            return state;
    }
};