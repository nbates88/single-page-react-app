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

	getAll() {
		return this.todos;
	}
}

const todoStore = new TodoStore;

export default todoStore;