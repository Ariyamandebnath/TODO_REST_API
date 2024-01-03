import {TODO} from "../models/todo.modle.js"

const getTodoById = (req, res, next, todoId) => {
    
    TODO.findById(todoId).exec((err, todo) => {
      if (err || !todo) {
        return res.status(400).json({
          error: "404 todo not found",
        });
      }
      
      // store that todo in req.todo so that other functions can use it
      
      req.todo = todo;
      
      // Because this is a middleware we have to call the next()
      // which will pass the control to the next function in the middleware stack
      
     
     next();


    });
  };


//Functions to get all the todos


const getAllTodos = (req, res)=>{

    // simply use .find() method and it will return all the  todos

    TODO.find()
    .sort("-CreatedAt")
    .exec((err, todos)=>{
        //error checking
        if (err || !todos){
            return res.status(400).json({
                error:"Something went wrong in fiding all the todos",
            })
        }
        res.json(todos)
    })

}



//Function to create a todo:

const createTodo = (req,res) =>{
    //we will get json data from frontend i.e. req.body
    const todo = new TODO(req.body)

    //create a todo instance by passing 'task' field from 'req.body' 

    todo.save((err, task)=>{
        if(err||task){
            return res.status(400).json({
                error:"Something went wrong"
            })
        }

        res.json({task})
    })


}


const getTodo = (req,res) =>{

    return res.json(req.todo)
}


//function to Update a todo:

const updateTodo =(req, res) =>{

    const todo = req.todo;

    todo.task = req.body.task;
    
    todo.save((err,t)=>{
        if (err|| !t){
            return res.status(400).json({
                error:"Something went wrong while updating"
            })
        }
        res.json(t)
    }) 
}

const deleteTodo= (req, res) => {
    // take req.todo from getTodoById() middleware and
    // fetch the todo that user wants to delete
    const todo = req.todo;
    // call .remove() method to delete it
    todo.remove((err, task) => {
      if (err || !task) {
        return res.status(400).json({
          error: "something went wrong while deleting the todo",
        });
      }
      // send deleted todo and success message as a json response
      res.json({
        task_deleted: task,
        message: "Todo deleted successfully!",
      });
    });
  };

export {
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
  }