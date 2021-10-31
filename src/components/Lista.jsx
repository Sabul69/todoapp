import React from 'react'

const Lista = ({tarea,dispatch,index,list}) => {
    const handleComplete = () =>{
        dispatch({type:"Complete", payload:index})
    }
    const handleDelete = () =>{
        dispatch({type:"Delete", payload:index})
    }
    const handleErase = () =>{
        dispatch({type:"Erase", payload:index})
    }

    return (
        <div className="flex justify-content-between">
            <p className={`text-left w-10/12 mt-3 ${list === "Completed" && "line-through"} ${list === "Pending" && "font-bold"}`}>{tarea}</p>
            <button className="w-2/12 bg-third h-10 rounded-xl m-auto" onClick={list==="Pending" ? handleComplete : list==="Completed" ? handleDelete : handleErase}>{list==="Pending" ?"Completar" : list==="Completed" ? "Quitar" : "Eliminiar"}</button>
        </div>
    )
}

export default Lista
