import { 
    SIDEBAR_OPEN 
} from "../constants/actionTypes";

const initialState = {
    sidebarOpen: false
};

export default function sidebar(state = initialState, action) {
    switch(action.type)
    {
        case SIDEBAR_OPEN:
        {
            return Object.assign({}, state, {
                sidebarOpen: !state.sidebarOpen
            });
        }
        default:
            return state;
    }
};