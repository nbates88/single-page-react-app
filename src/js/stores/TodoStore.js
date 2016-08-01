import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
        {
          id: 1,
          text: "shop",
          complete: false
        },
        {
          id: 2,
          text: "bills",
          complete: false
        },
      ];
	}

	createTodo(text){
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit('change');
	}

	getAll() {
		return this.todos;
	}
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
export default todoStore;