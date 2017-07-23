export const add = dispatch => {
    return (r) => {
        dispatch({
            type: 'ADD',
            payload: {
                r
            }
        });
    };
};

export const addAsync = dispatch => {
    return (r) => {
        dispatch({
            type: 'ADD_ASYNC_REQUEST'
        });

        window.setTimeout(() => {
            dispatch({
                type: 'ADD_ASYNC_SUCCESS',
                payload: {
                    r
                }
            });
        }, 3000);
    };
};
