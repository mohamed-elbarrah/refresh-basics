

export const intialState = 0;


const countreducer = (state, action) => {
    switch(action){

        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return intialState;
            
        default:
            return state;

    }
}

export default countreducer;