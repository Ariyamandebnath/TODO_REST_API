import express from 'express';
//therse are all the controllers
import {
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
  }  from "../controllers/todo.controller.js"

const router = express.Router();


//params
// it will fetch the value from the url
router.param("todoId", getTodoById);

// to get all the todos
router.get("/todos/", getAllTodos);

// to get a single todo
router.get("/todo/:todoId/", getTodo);

// to create a todo
router.post("/todo/create/", createTodo);

// to update the todo
router.put("/todo/:todoId/update", updateTodo);

// to delete the todo
router.delete("/todo/:todoId/delete", deleteTodo);

export {router}