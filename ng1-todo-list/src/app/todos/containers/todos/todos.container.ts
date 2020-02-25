
import { TodosService } from '../../services/todos.service';
import { ITodo } from '../../models/todo.model';

/**
 * Import the Component styles
 */
import './todos.container.scss';

class TodosController {
  todos: ITodo[];

  constructor(
      private todosService: TodosService
  ) {
      'ngInject';
    }

  $onInit() {
    this.fetchData();
  }

  remove(id: number) {
    this.todosService.remove(id);
    this.fetchData();
  }

  private fetchData() {
    this.todosService.getAll()
      .then(todos => {
        this.todos = todos;
      });
  }
}

export class TodosContainer implements angular.IComponentOptions {
  static selector = 'todos';
  static controller = TodosController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <h1>Todos</h1>
      <todo-list todos="$ctrl.todos" todo-removed="$ctrl.remove($event.id)"></todo-list>
      <a class="btn btn-primary btn-block" ui-sref="add-todo">Add</a>
    </div>
  </div>
  `;
}
