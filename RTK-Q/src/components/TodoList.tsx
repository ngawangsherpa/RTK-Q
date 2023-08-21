import React from "react";
import { useGetTodosQuery } from "../services/TodoApi";

const TodoList = () => {
    const [ data: todos, error, isLoading ] = useGetTodosQuery();
    if (isLoading) {
        return <p>Loading...</p>;
