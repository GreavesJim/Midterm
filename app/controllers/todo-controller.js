import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  let todo = store.State.todos;
  todo.forEach(t => {
    template += t.Template;
  });
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
    _drawTodos();
  }

  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    console.log(e);

    var todo = {
      description: form.description.value
      //TODO build the todo object from the data that comes into this method
    };
    console.log(todo);

    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatusAsync(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodoAsync(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
