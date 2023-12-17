import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList />;
      <input type="text" />
      <button>Add Item</button>
      <button>Clear Item</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
