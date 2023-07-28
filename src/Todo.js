import React, { useEffect, useState } from "react";

const Todo = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleComplete = (index) => {
    console.log(index);
    const newData = [...data];
    if (newData[index].isCompleted) {
      newData[index].isCompleted = false;
    } else {
      newData[index].isCompleted = true;
    }
    setData(newData);
    console.log(data, "dataaa");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, todo]);
    setTodo({ title: "", description: "" });
  };

  const handleDelete = (index) => {
    const filterData = data.filter((val, i) => i !== index);
    setData(filterData);
  };
  useEffect(() => {}, [data]);
  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="todo-input"
            type="text"
            placeholder="Title"
            value={todo.title}
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="todo-input"
            placeholder="Description"
            value={todo.description}
            name="description"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="todo-btn">
          ADD
        </button>

        {data.length > 0 &&
          data.map((val, i) => {
            return (
              <div key={i} className="output">
                <div className={val.isCompleted ? "datas-completed" : "datas"}>
                  <h2 className="" onClick={() => handleComplete(i)}>
                    {val.title}
                  </h2>
                  <h5 className="desc" onClick={() => handleComplete(i)}>
                    {val.description}
                  </h5>
                  <button
                    type="submit"
                    className="todo-btn"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default Todo;
