import MyMatches from '../presentational/MyMatches';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        hasErrored: state.hasErrored
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMatches);