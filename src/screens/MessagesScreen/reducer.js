import Message from "../../models/Message";

// Actions types:
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const messagesInitState = [
    new Message(1, "T1", "D1", require("../../../assets/mosh.jpg")),
    new Message(2, "T2", "D2", require("../../../assets/mosh.jpg")),
];

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            return state.filter((message) => message.id !== action.payload);
        default:
            return state;
    }
};
