import {Component, bootstrap} from 'angular2/angular2';
import {AddTodo} from './components/add-todo/add-todo';
import {ListTodos} from './components/list-todos/list-todos';
import {TodoService} from "./services/todo-service/todo-service";

@Component({
    selector: 'todogular-app',
    providers: [TodoService],
    templateUrl: 'app/todogular.html',
    directives: [AddTodo, ListTodos],
    pipes: []
})
export class TodogularApp {

    todos:string[];
    private todoService:TodoService;

    constructor(todoService: TodoService) {
        this.todoService=todoService;
        this.todos  = todoService.todos;
        console.log(todoService);
    }


    todoAdded(todo:string) {
        console.log(this.todoService);
        this.todoService.add(todo);
        console.log('adding todo' + todo );
        this.todos = this.todoService.todos;
    }

}
