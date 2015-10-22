import {Component, bootstrap} from 'angular2/angular2';
import {AddTodo} from './components/add-todo/add-todo'

@Component({
    selector: 'todogular-app',
    providers: [],
    templateUrl: 'app/todogular.html',
    directives: [AddTodo],
    pipes: []
})
export class TodogularApp {

    constructor() {
    }

}
