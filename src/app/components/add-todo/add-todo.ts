import {Component, Output, EventEmitter,FORM_DIRECTIVES} from 'angular2/angular2';


@Component({
    selector: 'add-todo',
    templateUrl: 'app/components/add-todo/add-todo.html',
    styleUrls: ['app/components/add-todo/add-todo.css'],
    providers: [],
    directives: [FORM_DIRECTIVES],
    pipes: []
})
export class AddTodo {
    todo:string = "";
    @Output() todoAdded:EventEmitter = new EventEmitter();

    constructor() {
        this.todo = "Default todo";
    }

    public onAddTodo(todo:string) {
        this.todoAdded.next(this.todo);
        console.log('the todo is ' + this.todo);
    }
}