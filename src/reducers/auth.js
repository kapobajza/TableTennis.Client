const initialState = {
    user: {
        userName: '',
        token: ''
    },
    registerMessage: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: {
                    userName: action.userName,
                    token: action.token
                }
            };

        case "LOGOUT":
            return {
                ...state,
                user: {
                    userName: '',
                    token: ''
                }
            };

        case "REGISTER":
            return {
                ...state,
                registerMessage: action.message
            };

        default:
            return state;
    }
}

export default auth;