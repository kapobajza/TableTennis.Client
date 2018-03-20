import Drawer from '../presentational/Drawer';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { matchesNavigate, teamsNavigate, myTeamsNavigate } from '../../actions/navigation';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        navigateToMatches: () => dispatch(matchesNavigate()),
        navigateToTeams: () => dispatch(teamsNavigate()),
        navigateToMyTeams: () => dispatch(myTeamsNavigate())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Drawer);