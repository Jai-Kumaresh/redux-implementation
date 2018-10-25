import { Role } from '../../role.model';
import { RoleActions, GET_ALL_ROLE, SET_ROLE, CREATE_ROLE, EDIT_ROLE } from '../actions/role.actions';

// const initialState: Role = {};

export function reducer(
    state: Role[] = [],
    action: RoleActions) {

    switch (action.type) {
        case GET_ALL_ROLE:
            return state;
            
        case SET_ROLE:
            return Object.assign({}, state, action.payload);

        case CREATE_ROLE:
            return [...state, action.payload];

        case EDIT_ROLE:
            return state//.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}
