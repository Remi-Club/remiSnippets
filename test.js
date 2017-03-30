const DEFAULT_STATE = {
    test: test
};

export default function (state, action) {
    switch (action.type) {
        case 'XX_XX':
            return Object.assign({}, state, action.data);
        default:
            return state || DEFAULT_STATE;
    }
};
