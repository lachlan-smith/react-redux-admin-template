import { USER_MENU_OPEN } from "../constants/actionTypes";

export function openUserMenu(payload) {
    return { 
        type: USER_MENU_OPEN, 
        payload 
    }
 };