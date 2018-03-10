import Register from '../presentational/Register';
import { connect } from 'react-redux';
import { register, registerAction, logout } from '../../actions/auth';
import { clearError } from '../../actions/global';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored,
        registerSuccess: state.auth.registerSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(register(user)),
        clearError: () => dispatch(clearError()),
        clearRegisterSuccess: () => dispatch(registerAction(false)),
        goToLogin: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);