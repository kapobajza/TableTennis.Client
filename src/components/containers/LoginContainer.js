import Login from '../presentational/Login';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { registerNavigate } from '../../actions/navigation';
import { clearError } from '../../actions/global';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        clearError: () => dispatch(clearError()),
        goToRegister: () => dispatch(registerNavigate())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);