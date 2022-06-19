import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import AppReducer from './app/reducer';
import ParamReducer from './param/reducer';
import HelperReducer from './helper/reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
    app: AppReducer,
    param: ParamReducer,
    helper: HelperReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState>));
export default store;

export type RootDispatch = typeof store.dispatch;
export const useRootDispatch = () => useDispatch<RootDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
