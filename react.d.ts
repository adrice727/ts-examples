declare type ActionCreator = (...data: any[]) => Action;
declare type GetState = () => any;
declare type Dispatch = (action: Action | Thunk | Array<Action>) => any; // eslint-disable-line flowtype/no-weak-types
declare type Thunk = (dispatch: Dispatch, getState: GetState) => any; // eslint-disable-line flowtype/no-weak-types
declare type ThunkActionCreator = (...data: any[]) => Thunk;

declare type Action = any;
