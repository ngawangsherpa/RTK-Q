import React from "react";
import { useGetTodosQuery } from "../services/TodoApi";

const TodoList = () => {
    const { data: todos, error, isLoading ] = useGetTodosQuery();
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
                {todos.map ((todo: { _id: React.Key | null | undefined; tittle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <li key={ todo._id }>{todo.tittle}</li>
                ))}
            </ul>
        </div>
    );
    };