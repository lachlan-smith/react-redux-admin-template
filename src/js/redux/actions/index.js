import { DARK_MODE } from "../constants/actionTypes";

export function changeTheme(payload) {
    return { 
        type: DARK_MODE, 
        payload 
    }
 };