import {combineReducers, legacy_createStore} from 'redux';
import {authReducer} from './reducers/authReducer';


export type AppStateType = ReturnType<typeof rootReducer>

// export type AppActionType = authReducerType |


const rootReducer = combineReducers({
    auth: authReducer
})
export const store = legacy_createStore(rootReducer)