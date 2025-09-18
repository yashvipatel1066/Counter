import { useReducer, useState } from "react"

export const ReducerComp = () => {

    const reducer = (state , action) => {
        console.log(state , action);
        if(action.type === "INCREMENT"){
            return state + 1;
        }

        if(action.type === "DECREMENT"){
            return state - 1;
        }
    }


    const[count , dispatch] = useReducer(reducer , 0);
    console.log(useReducer);

    return(
        <>
        <div className="p-4 h-lvh flex flex-col justify-center items-center">
            <h1 className="font-bold">click the Button and your number is Increment and Decrement</h1>
            <h1 className="font-bold text-2xl m-2">{count}</h1>
            <button
            className="bg-blue-500 p-4 rounded-lg text-white mb-2"
            onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
            <button 
             className="bg-blue-500 p-4 rounded-lg text-white mb-2"
            onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
        </>

    )
}