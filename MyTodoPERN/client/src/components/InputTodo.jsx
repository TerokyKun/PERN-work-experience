import React, {useState } from "react";



const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmintForm = async  () => {
    try {
       const body = {description};
       const response = await fetch("http://localhost:5000/todos",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
       });
     window.location = "/"
    } catch (error) {
        console.error(error.message);
    }
}

  return (
    <> <h1>Блокнот</h1>
      <div className="add">
      <form onSubmit={onSubmintForm}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Добавить</button>
      </form>
    </div></>
     
  );
};

export default InputTodo;
