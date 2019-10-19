import { actions } from "./actions.actions";

const leftNavOpenReducer = (state = false, { type, payload }) => {
    switch (type) {
        case actions.setLeftNavState: {
            return !!payload;
        }
        default: {
            return state;
        }
    }
};

export default leftNavOpenReducer;