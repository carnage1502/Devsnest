import { updateEmail, updateUserName } from "./ActionType";

const initalState = {
    username: '',
    email: ''
}

export const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case updateUserName:
            return {
                ...state,
                username: action.payload
            }
        case updateEmail:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state
    }
}
