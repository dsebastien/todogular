import {Component, Input, NgFor} from 'angular2/angular2';


@Component({
    selector: 'list-todos',
    templateUrl: 'app/components/list-todos/list-todos.html',
    styleUrls: ['app/components/list-todos/list-todos.css'],
    providers: [],
    directives: [NgFor],
    pipes: []
})
export class ListTodos {

    @Input() todos:string[];
    constructor() {
    }

}