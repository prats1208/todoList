import React from 'react';
import './App.css';

const Todo = ({text,todos,setTodos,tolist}) => {

    const deleteHandler = () =>{
        setTodos(todos.filter((el)=> el.id !== tolist.id ));
    }

    const completeHandler = (e) =>{
         setTodos(todos.map((item) => {
             if(item.id=== tolist.id){
                 return{
                    ...item, completed: !item.completed
                 }
             }
             return item;
         }));
    }

    return(
        <li className="list-component">
            <p id="lis" className={tolist.completed ? "completed" : ""}>{text}</p>
            <div className="actions">
              <button className="btn" onClick={completeHandler}><i class="fas fa-check-circle"></i></button>
              <button className="btn" onClick={deleteHandler}><i class="fas fa-trash-alt"></i></button>
            </div>
        </li>
    )
}

export default Todo;