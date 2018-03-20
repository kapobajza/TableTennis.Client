import MyTeams from '../presentational/MyTeams';
import { connect } from 'react-redux';
import { getMyTeams, addTeam } from '../../actions/team';
import { clearError } from '../../actions/global';
import { addTeamToUser } from '../../actions/auth';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored,
        user: state.auth.user,
        teams: state.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearError()),
        addTeam: (team, token) => dispatch(addTeam(team, token)),
        addTeamToUser: (team) => dispatch(addTeamToUser(team)),
        getMyTeams: (userId, token) => dispatch(getMyTeams(userId, token))         
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTeams);