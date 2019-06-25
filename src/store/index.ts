import * as redux from 'redux';

import * as fetcherReducer from '../reducers/fetcher';


export interface IState {
  fetcher: fetcherReducer.IState,
}

const reducers = redux.combineReducers({
  fetcher: fetcherReducer.reducer
});

export const store = redux.createStore(reducers);
