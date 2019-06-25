import * as React from "react";

import * as reactRedux from "react-redux";
import * as redux from "redux";

import * as store from '../store';

import Fetcher from '../components/Fetcher';

interface IPropsFromState {
  loading: boolean;
  body?: any;
  url?: string;
  error?: Error;
}

interface IPropsFromDispatch {
}

const mapStateToProps = (state: store.IState): IPropsFromState => {
  return {
    loading: state.fetcher.loading,
    body: state.fetcher.body,
    url: state.fetcher.url,
    error: state.fetcher.error,
  };
}

const mapDispatchToProps = (dispatch: redux.Dispatch): IPropsFromDispatch => {
  return redux.bindActionCreators(
    {
    },
    dispatch
  );
}

export default reactRedux.connect<IPropsFromState, IPropsFromDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(Fetcher);
