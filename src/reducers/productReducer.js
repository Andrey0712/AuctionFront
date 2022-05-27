import { PRODUCTS,REGISTER_PRODUCTS } from "../constants/actionTypes";


const initialState = {
    list: []
};

function productReducer(state  = initialState, action) {
    const {type, payload} = action;
    switch(type){
        case PRODUCTS: {
            return {
                ...state,
                list: payload
            }
            
        }
        case REGISTER_PRODUCTS:
            {
                return {
                    ...state,
                list: payload
                    
                }
            }
        default: 
            return state ;
    }
}
export default productReducer;