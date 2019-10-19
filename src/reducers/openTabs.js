const openTabsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_TAB_OPEN_STATE': {
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