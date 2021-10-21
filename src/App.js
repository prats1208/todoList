import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './todo';

function App() {
  const [inputText,setinputText]= useState("");
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    getlocalTodos();
  },[]);

  useEffect(() => {
    savelocalTodos();
  }, [todos]);

  // Save to local
  const savelocalTodos = () =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const getlocalTodos = () =>{
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  function onchangeHandler(e){
    setinputText(e.target.value);
  }

  function onsub(e){
    e.preventDefault();
    setTodos([
      ...todos, {
      text:inputText,
      completed:false,
      id:Math.floor(Math.random() * 50)
    }]);    
    setinputText("");
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="upper">
        <input type="text" onChange={onchangeHandler} value={inputText} />
        <button className="btn" onClick={onsub}>Add<i class="fas fa-plus-square"></i></button>
      </div>
      <div className="lower">
        <ul className="list">
         {
            todos.map((tolist) => (
              <Todo text={tolist.text} key={tolist.id} todos={todos} setTodos={setTodos} tolist={tolist} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
