const leftNavOpenReducer = (state = false, { type, payload }) => {
    switch (type) {
        case 'SET_LEFT_NAV_STATE': {
            return !!payload;
        }
        default: {
            return state;
        }
    }
};

export default leftNavOpenReducer;