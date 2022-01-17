import {combineReducers} from 'redux';

import records from "./records";
import recordStats from './recordStats';

export default combineReducers({
    records,
    recordStats,
});