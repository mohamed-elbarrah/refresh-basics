


const balance = 100;

const reducer = (state =  balance, action: { type: string,  }) =>{
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "DROW":
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;