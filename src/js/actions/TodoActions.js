import dispatcher from '../dispatcher';

export function createTodo(text){
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		text,
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id,
	});
}

export function reloadTodos(){
	// axious("http://someurl.com/somedataendpoint").then((data) => {
	// 	console.log(data)
	// })
	dispatcher.dispatch({type: 'FETCH_TODOS'});
	setTimeout(() => {
		dispatcher.dispatch({type: 'RECEIVE_TODOS', todos: [
		{
          id: 4,
          text: "shop again",
          complete: false
        },
        {
          id: 5,
          text: "pay more bills",
          complete: true
        }
		]});

	}, 1000)
}