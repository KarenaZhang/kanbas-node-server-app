import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoList() {
    const { todos } = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo) => (
                    <TodoItem todo={todo} deleteTodo={deleteTodo} setTodo={setTodo} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;