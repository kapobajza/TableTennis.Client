const initialState = {
    user: {
        userName: '',
        token: ''
    },
    registerSuccess: false
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
                registerSuccess: action.registerSuccess
            };

        default:
            return state;
    }
}

export default auth;