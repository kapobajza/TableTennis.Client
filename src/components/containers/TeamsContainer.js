import Teams from '../presentational/Teams';
import { connect } from 'react-redux';
import { getTeams } from '../../actions/team';
import { clearError } from '../../actions/global';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored,
        myTeams: state.auth.user.teams,
        user: state.auth.user,
        teams: state.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeams: (skip, take, token) => dispatch(getTeams(skip, take, token)),
        clearError: () => dispatch(clearError())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);