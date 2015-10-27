import {Injectable} from 'angular2/angular2';

@Injectable()
export class TodoService {

    private _todos:string[];

    constructor() {
        this._todos = [];
    }

    add(todo:string) {
        console.log(this._todos);
        this._todos.push(todo);
    }

    get todos():string[] {
        return this._todos;
    }
}