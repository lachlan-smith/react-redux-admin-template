import { 
    DARK_MODE 
} from "../constants/actionTypes";

const initialState = {
    darkMode: false
};

export default function theme(state = initialState, action) {
    switch(action.type)
    {
        case DARK_MODE:
        {
            console.log(state);
            return Object.assign({}, state, {
                darkMode: !state.darkMode
            });
        }
        default:
            return state;
    }
};