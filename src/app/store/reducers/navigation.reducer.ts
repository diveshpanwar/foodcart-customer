import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/navigation.actions';

const initialNavigation = [
    {
        path: '/login',
        icon: 'lock_open',
        name: 'Login',
        auth: 'false'
    },
    {
        path: '/notifications',
        icon: 'notifications',
        name: 'Notifications',
        auth: 'false'
    },
]

export const initialState = initialNavigation;

export function NavigationReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Authenticate:
            return state;

        case ActionTypes.Deauthenticate:
            return state;

        default:
            return state;
    }
}