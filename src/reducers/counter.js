import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    num: 32,
    isFetching: false
});

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
        case 'ADD_ASYNC_SUCCESS':
            return state.merge({
                isFetching: false,
                num: action.payload.r + ' / ' + Math.random()
            });

        case 'ADD_ASYNC_REQUEST':
            return state.merge({
                isFetching: true
            });
    }

    return state;
};

export default counter;
