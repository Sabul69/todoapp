import { createContext, useReducer } from "react";

const todoContext =createContext();

const TodoProvider = ({children}) => {

    const initialState = [] 

    const reducer = (state, action) => {
        switch (action.type) {
            case "Init": 
                return(
                   [action.payload])

            case "Add": 
                return(
                   [...state, {todo:action.payload,status:"Pending"}])

            case "Complete":

                const updated = [...state];
                updated[action.payload].status = "Completed"

            return(     
            updated
            )
            case "Delete":
                
                const updated2 = [...state];
                updated2[action.payload].status = "Delete"

            return(     
            updated2
            )

            case "Erase":

                const erase = state.filter((user, index)=>index !== action.payload)
            return(erase)            
        
            default:
               return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const data ={state, dispatch}
    return(
        <todoContext.Provider value= {data}>
            {children}
        </todoContext.Provider>
)
    }

export default todoContext;
export {TodoProvider}