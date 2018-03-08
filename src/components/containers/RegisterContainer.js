import Register from '../presentational/Register';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { clearError } from '../../actions/global';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored,
        registerMessage: state.auth.registerMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(register(user)),
        clearError: () => dispatch(clearError())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);