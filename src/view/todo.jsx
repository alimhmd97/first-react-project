import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";
import { useSelector, useDispatch } from "react-redux";
import "./todo.css";
import { addTodoAction } from "../components/redux/Todo";
import { removeTodoAction } from "../components/redux/Todo";
function Todo() {
    const todoState = useSelector((state) => state.todos);

    const dispatch = useDispatch();
    const addTodo = (task) => {
        dispatch(addTodoAction(task));
    };

    const deleteTodo = (i) => {
        dispatch(removeTodoAction(i));
    };

    return (
        <div className="text-center py-2 todo-wrapper container">
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todoState} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Todo;
