import { 
    AddActor_SUCCESS,
    AddActor_FAIL
 } from "../action/type";
 const initialSate ={
    loading: true,
}

 export default (state = initialSate, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case AddActor_SUCCESS:
            return { 
                ...state,
                ...payload,
                loading:false
            };
        case AddActor_FAIL:
            return {
                ...state,
                loading:false
            }
        default:
            return state
     }
 }