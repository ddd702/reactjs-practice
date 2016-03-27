import {connect} from 'react-redux';
import {Counter} from '../components/counter';
function init(state){
    return {
        count:state.ReducerCounter.count,
        behavior:state.ReducerCounter.type,
        setNum:state.ReducerCounter2.count
    }
}
export default connect(init)(Counter)