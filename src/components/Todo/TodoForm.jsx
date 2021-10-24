import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault();
        if (title && content) {
            addTodo({ title, content });
            setTitle("");
            setContent("");
        } else {
            alert("there is an empty required feild")
        }
    };

    return (

        <div>
            <h3 className="text-muted mb-4">Add a TODO</h3>

            <form onSubmit={handleSubmission}>
                Title <br />
                <input

                    className="form-control m-auto w-50"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                Content <br />
                <textarea
                    className="form-control w-50 m-auto"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <button
                    className="my-4 btn btn-primary btn-sm px-4"
                    type="submit"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
