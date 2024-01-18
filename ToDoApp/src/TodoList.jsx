/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteToDo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No todos"}
            {todos.map(todo => {
            // console.log(todos);
            return (
            <TodoItem 
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteToDo}
            />
            )
            })}
        </ul>
    )
}