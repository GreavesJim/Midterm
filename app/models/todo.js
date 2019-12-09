export default class ToDo {
  constructor(data) {
    this.id = data._id;
    this.description = data.description;
  }

  get Template() {
    return `
    <li onclick="app.todoController.toggleTodoStatusAsync('${this.id}')">${this.description}</li>   <button type="button" onclick="app.todoController.removeTodoAsync('${this.id}')">X</button>
    `;
  }
}
