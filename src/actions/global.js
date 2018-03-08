export const isLoading = (loading) => {
    return {
        type: 'IS_LOADING',
        loading
    }
}

export const hasErrored = (error) => {
    return {
        type: 'HAS_ERRORED',
        error
    }
}

export const clearError = () => {
    return {
        type: 'CLEAR_ERROR'
    }
}