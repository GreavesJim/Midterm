import store from "../store.js";
import ToDo from "../models/todo.js";

// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Jim/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await _todoApi.get("");
    console.log(res);

    store.commit(
      "todos",
      res.data.data.map(task => new ToDo(task))
    );

    //TODO Handle this response from the server7
  }

  async addTodoAsync(todo) {
    console.log(todo);

    let res = await _todoApi.post("", todo);
    console.log(res);
    this.getTodos();
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    console.log(todo);

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    if (todo.completed == false) {
      todo.completed = true;
      todo.description = todo.description.strike();
    } else {
      todo.completed = false;
      todo.description = todo.description;
    }
    this.getTodos();
    let res = await _todoApi.put(todoId, todo);
    console.log(res);

    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?

    _todoApi.delete(`${todoId}`);
    this.getTodos();
  }
}

const todoService = new TodoService();
export default todoService;
