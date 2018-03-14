const teams = (state = [], action) => {
    switch (action.type) {
        case "GET_TEAMS":
            // return [
            //     ...state,
            //     ...action.teams
            // ];
            return action.teams;

        default:
            return state;
    }
}

export default teams;