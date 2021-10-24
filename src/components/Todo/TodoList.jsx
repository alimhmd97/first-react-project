const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {

                return (
                    <ul
                        key={i}
                        className="d-flex justify-content-center list-unstyled"
                    >
                        <li className="border text-white py-2 px-5">
                            <div className="text">
                                <p className="text-center">
                                    Title : {todo.title}
                                </p>
                                <p className="text-center">
                                    Content : {todo.content}
                                </p>
                                <button
                                    className="my-4 btn btn-danger btn-sm px-4 "
                                    type="submit"
                                    onClick={() => deleteTodo(i)}
                                >
                                    remove
                                </button>
                            </div>
                        </li>
                    </ul>
                );
            })
        ) : (

            <p className="h5 mx-5 text-muted">no items on the list ..</p>
        );

    return (
        <div className="text-left">
            <h5 className="mx-5 text-muted">Todos List</h5>
            {todosList}
        </div>
    );
};

export default TodoList;
