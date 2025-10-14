


const balance = 100;

const reducer = (state =  balance, action: { type: string }) =>{
    switch (action.type) {
        case "DEPOSIT":
            return state + 10;
        case "DROW":
            return state - 10;
        default:
            return state;
    }
};

export default reducer;