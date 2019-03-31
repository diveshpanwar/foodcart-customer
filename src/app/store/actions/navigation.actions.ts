import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Authenticate = '[Authorize the entries] Auth',
  Deauthenticate = '[DeAuthorize the entries] DeAuth',
}
 
export class Authenticate implements Action {
  readonly type = ActionTypes.Authenticate;
}

export class Deauthenticate implements Action {
  readonly type = ActionTypes.Deauthenticate;
}
