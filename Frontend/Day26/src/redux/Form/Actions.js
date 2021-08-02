import { updateEmail, updateUserName } from "./ActionType";

// action creators

// userName action creator
const updateUserNameInput = (input) => {
    return {
        type: updateUserName,
        payload: input
    }
}

// email name action creator
const updateEmailInput = (input) => {
    return {
        type: updateEmail,
        payload: input
    }
}

export { updateUserNameInput, updateEmailInput }