// store/reducers/index.ts
import { combineReducers } from 'redux';
import MyRedux from './reducer'

const rootReducer = combineReducers({
    myredux: MyRedux,
});

export default rootReducer;
