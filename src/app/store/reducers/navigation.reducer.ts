import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/navigation.actions';

const initialNavigation = [
    {
        path: '/orderFood',
        icon: 'payment',
        name: 'Order Food',
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