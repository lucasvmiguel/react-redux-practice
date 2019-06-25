import * as types from '../types/fetcher';

export interface IState {
  url?: string;
  loading: boolean;
  body?: any;
  error?: Error;
}

export interface IAction {
  type: string;
  url?: string;
  body?: any;
  error?: Error;
}

const initialState: IState = {
  loading: false
}

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        url: action.url,
        body: undefined,
        error: undefined,
        loading: true
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        body: action.body,
        loading: false
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state
  }
};