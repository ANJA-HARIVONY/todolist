import React, { useState } from 'react';
import "../styles/TodoList.css"

const TodoList = () => {

    const [task, setTask] = useState([{
        id:0,
        nombre: ""
    }]);
    const [valText, setValText] = useState("");
    const [mess, setMess] = useState(true);


    const handleChange = (e:any) =>{
        setValText(e.target.value);
    }

    const handleAddTask = () =>{
        const tab  = [...task];
        
        if(valText ==="")
        {
            setMess(false);
        }else{
            tab.push({
                id: Date.now(),
                nombre: valText
            });
             setTask(tab);
             setValText("");
             setMess(true);
        }
       
    }

    const handleDelete = (a:number) =>{
        const tab2 = [...task];
        const id:number = a
        //console.log(id);
        //console.log(tab2);

        setTask(tab2.filter(task => task.id !== id));
        

        //setTask(tab2);
        
        
    }

    return (
        <div className="todolist">
            <div className="header">
           <h1>My Todo list</h1>
            </div>
            <div className="content">
                <label>Fecha:{Date.now()}</label>
                <input type="text" placeholder={mess ? "Add Tareja" : "Ecribir tarea aquí.."} value={valText} className="textimput" onChange={handleChange} />
                <button className="myButton"onClick={handleAddTask}>Valider</button>
            </div>
            <div className="footer">
                <h3>Lista de tarejas</h3>
                <ul>
                {
                    task.map( (tas) => (
                        
                            <li key={tas.id}  >{tas.nombre} <button id={tas.id.toString()} onClick={() => handleDelete(tas.id)}>X</button></li>
                        
                    )  )
                }
                </ul>
                
            </div>
        </div>
        
    );
};

export default TodoList;