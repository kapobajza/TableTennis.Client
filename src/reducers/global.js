export const hasErrored = (state = { message: '' }, action) => {
    switch (action.type) {
        case 'HAS_ERRORED':
            return {
                message: action.error.message
            }
        case 'CLEAR_ERROR':
            return {
                message: ''
            }
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return action.loading;
        default:
            return state;
    }
}