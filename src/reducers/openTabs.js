import {actions} from './actions.actions'

const openTabsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actions.setTabOpenState: {
            return {
                ...state,
                ...payload
            };
        }
        default: {
            return state;
        }
    }
};

export default openTabsReducer;