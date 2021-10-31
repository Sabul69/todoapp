import { useContext, useState } from "react";
import Delete from "./components/Delete";
import Pending from "./components/Pending";
import Ready from "./components/Ready";
import Todos from "./components/Todos";
import todoContext from "./context/todoContext";
import "./App.css"
function App() {
  const {dispatch} = useContext(todoContext)
  const [list, setlist] = useState("All")
  const [todo, settodo] = useState("")

  //  useEffect(() => {
  //    if (JSON.parse(localStorage.getItem("todos"))) {
  //     //dispatch({type:"Init", payload:JSON.parse(localStorage.getItem("todos"))})
  //     console.log("creado");
  //    // console.log(JSON.parse(localStorage.getItem("todos")));
  //    } else {
  //     dispatch({type:"Init", payload:localStorage.setItem("todos", JSON.stringify([]))})
  //      console.log("nada");
  //    }
  //    }, [])

  const viewAll = () => {
    setlist("All");
  };
  const viewPending = () => {
    setlist("Pending");
  };
  const viewCompleted = () => {
    setlist("Completed");
  };
  const viewDelete = () => {
    setlist("Delete");
  };
  const handleAdd = () =>{
    dispatch ({type:"Add", payload:todo})
    settodo("")
  }
  
  return (
    <div className="flex justify-center items-center flex-column h-screen bg-third">
      <div className="w-full h-80 bg-fourth flex justify-center items-center">
      <h1 className="">Todo App</h1>
      </div>
      <div className="flex-col justify-center items-center w-8/12 ">
        <div className="p-28 text-center">
        <input type="text" className="w-8/12 rounded-xl p-1" name="todo" id="todo" onChange={e=>settodo(e.target.value)} value={todo}/> 
        <input type="button" className="ml-3 bg-third px-4 bg-fourth rounded-xl p-1" value="Agregar" onClick={handleAdd} />
        </div>
        <div className="text-center flex-col">
        <button className={`w-6/12 border-2 mb-3 p-1 rounded-xl lista ${list === "All" ? "selected":"" }`} onClick={viewAll}>Tareas</button>
          {list === "Pending" ? <Pending list = {list}/> : list === "All"? <Todos list = {list}/>: list === "Completed"? <Ready list = {list}/>: <Delete list = {list}/> }
          <div className="mt-8 mb-10">
          <button className={`w-28 border-2 mr-8 p-1 rounded-xl lista ${list === "Pending" ? "selected":"" }`} onClick={viewPending}>Pendientes</button>
          <button className={`w-28 border-2 mr-8 p-1 rounded-xl lista ${list === "Completed" ? "selected":"" }`} onClick={viewCompleted}>Realizadas</button>
          <button className={`w-28 border-2 mr-8 p-1 rounded-xl lista ${list === "Delete" ? "selected":"" }`} onClick={viewDelete}>Borradas</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
