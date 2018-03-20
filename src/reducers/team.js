const initialState = {
    allTeams: [],
    addedTeam: {},
    myTeams: []
}

const teams = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TEAMS":
            return {
                ...state,
                allTeams: action.teams
            }

        case "ADD_TEAM":
            return {
                ...state,
                addedTeam: action.team
            }

        case "GET_MY_TEAMS":
            return {
                ...state,
                myTeams: action.teams
            }

        default:
            return state;
    }
}

export default teams;