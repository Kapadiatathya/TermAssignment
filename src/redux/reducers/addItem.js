const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        case "CLEAR_CART":
            return [];
        default: return state;
        break;

        
    }
}

export default addItems;