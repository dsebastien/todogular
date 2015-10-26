import {Component, bootstrap} from 'angular2/angular2';
import {AddTodo} from './components/add-todo/add-todo';
import {ListTodos} from './components/list-todos/list-todos';

@Component({
    selector: 'todogular-app',
    providers: [],
    templateUrl: 'app/todogular.html',
    directives: [AddTodo, ListTodos],
    pipes: []
})
export class TodogularApp {

    todos:string[];

    constructor() {
        this.todos = ['first todo', 'then sleep', 'or watch movie'];
    }

    todoAdded(todo:string) {
        console.log('adding todo' + todo );
        this.todos.push(todo);
    }

}
