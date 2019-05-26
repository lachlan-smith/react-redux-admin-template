import { SIDEBAR_OPEN } from "../constants/actionTypes";

export function openSidebar(payload) {
    return { 
        type: SIDEBAR_OPEN, 
        payload 
    }
 };