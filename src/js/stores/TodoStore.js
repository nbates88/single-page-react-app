import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

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

	handleActions(action) {
		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "RECEIVE_TODOS": {
				this.todos = action.todos;
				this.emit('change');
			}
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher;
export default todoStore;