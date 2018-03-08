import Teams from '../presentational/Teams';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);