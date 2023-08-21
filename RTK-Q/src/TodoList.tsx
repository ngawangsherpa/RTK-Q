import React from "react";
import { useGetTodosQuery } from "../services/TodoApi";

const TodoList = () => {
    const [ data: todos, error, isLoading ] = useGetTodosQuery();
    if (isLoading) {
        return <p>Loading...</p>;
        }
    else if(error){
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map ((todo) => (
                    <li key={ todo._id }>{todo.tittle}</li>
                ))}
            </ul>
        </div>
    );
    };