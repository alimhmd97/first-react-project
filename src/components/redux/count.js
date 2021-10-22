import { createStore } from "redux"
// import Counter from "../counter/counter"
 const INCREMENT_COUNT="INCREMENT-CONT"
 export const incrementCount=(payload)=>{
    // console.log(payload);
 return{   type: INCREMENT_COUNT,
    payload
}

}
const DECREMENT_COUNT="DECREMENT-CONT"
export const decrementCount=(payload)=>{

    return{   type: DECREMENT_COUNT,
       payload
   }
   
   }
const intialState ={
    count : 0 
}
const countReducer = (state = intialState , action ) =>{

    if(action.type===INCREMENT_COUNT){
    
        return{...state,count :state.count+1}
       
       
    }
  
    return state
    // if(action.type===DECREMENT_COUNT){
    //     return{...state,count :state.count-action.payload}

    // }
// switch (action.type) {
//     case INCREMENT_COUNT:
//         return {
//           {...state,count : state.count+ action.payload}
//         }
//         break;

//     default:
//         break;
// }
}
const store = createStore(countReducer)