import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as dalActions} from '../../reducer';
import Timer from './presenter';

const mapStateToProps = state => {
    const { isPlaying, elapcedTime, timerDuration } = state;
    return { isPlaying, elapcedTime, timerDuration };
}

const mapDispatchToState = dispatch => {
    return {
        startTimer: bindActionCreators(dalActions.startTimer, dispatch),
        restartTimer: bindActionCreators(dalActions.restartTimer, dispatch),
        addSecond: bindActionCreators(dalActions.addSecond, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToState)(Timer);

