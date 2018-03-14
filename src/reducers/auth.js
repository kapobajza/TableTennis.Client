const initialState = {
    user: {
        userName: '',
        token: '',
        teams: []
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
                    token: action.token,
                    teams: action.teams
                }
            };

        case "LOGOUT":
            return {
                ...state,
                user: {
                    userName: '',
                    token: '',
                    teams: []
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