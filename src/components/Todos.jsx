import React, { useContext } from 'react'
import todoContext from '../context/todoContext'
import Lista from './Lista'

const Todos = ({list}) => {
    const {state, dispatch} = useContext(todoContext)
    

    return (
        <div className="rounded-xl overflow-auto w-12/12 h-96 border-2 p-10 bg-second">
            {state.map((filter, index) =>
                {if (filter.status==="Pending")
                return <Lista
                tarea = {filter.todo}
                dispatch = {dispatch}
                index= {index}
                list = {filter.status}
                key={index}
                /> 
                else return null 
                })
            }
            {state.map((filter, index) =>
                {if (filter.status==="Completed")
                return <Lista
                tarea = {filter.todo}
                dispatch = {dispatch}
                index= {index}
                list = {filter.status}
                key={index}
                />  
                else return null 
                })
            }
        </div>
    )
}

export default Todos
