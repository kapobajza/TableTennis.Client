import Teams from '../presentational/Teams';
import { connect } from 'react-redux';
import { getTeams, addTeam } from '../../actions/team';
import { clearError } from '../../actions/global';
import { addTeamToUser } from '../../actions/auth';

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
        getTeams: (skip, take, token, userId) => dispatch(getTeams(skip, take, token, userId)),
        clearError: () => dispatch(clearError()),
        addTeam: (team, token) => dispatch(addTeam(team, token)),
        addTeamToUser: (team) => dispatch(addTeamToUser(team))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);