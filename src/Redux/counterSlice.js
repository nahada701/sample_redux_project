import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
        name:'counter',  //name of slice 
        initialState:{  //this is the intial state of the state 
            count:0  //name of state
        },  //can create as array or object
        reducers:{
            //actions defined here as object to update the state count
            //to get the intial value of the state "state" argument of the arrow function
            increment:(state)=>{
              return {...state,count:state.count+1} 
            },
            decrement:(state)=>{
               return {...state,count:state.count-1}
            },
            reset:(state)=>{  ///dont update by assigning a constat value that why caanot set count=0 directly 
                //so use sprwad operator to get older values and set count:0 
              return  {...state,count:0}
            },
            incrementByAmount:(state,action)=>{  //any data is passing to the action can be accessed using action argument and thae data will be inside the payload key of the action
                return {...state,count:state.count+action.payload}

            }

        }
    }
)

export const {increment,decrement,reset,incrementByAmount} =counterSlice.actions

export default counterSlice.reducer