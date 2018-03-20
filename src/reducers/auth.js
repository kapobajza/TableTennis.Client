const initialState = {
    user: {
        userId: 0,
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
                    userId: action.userId,
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
                },
                registerSuccess: false
            };

        case "REGISTER":
            return {
                ...state,
                registerSuccess: action.registerSuccess
            };

        case "ADD_TEAM_TO_USER":
            return {
                ...state,
                user: { 
                    ...state.user,
                    teams: [
                        ...state.user.teams,
                        action.team
                    ]
                }
            }

        default:
            return state;
    }
}

export default auth;