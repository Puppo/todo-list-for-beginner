import { TodosService, IAddTodoParam } from '../../services/todos.service';

export interface IAddTodoParamUi extends IAddTodoParam { }

class AddTodoController {

  constructor(
      private todosService: TodosService,
      private $state: angular.ui.IStateService
  ) {
    'ngInject';
  }

  add(todo: IAddTodoParamUi)  {
    this.todosService.add(todo);
    this.$state.go('todo');
  }
}

export class AddTodoContainer implements angular.IComponentOptions {
  static selector = 'addTodo';
  static controller = AddTodoController;
  static template = `
  <div class="row">
    <div class="col-md-12">
      <h1>Add Todo</h1>
      <add-todo-form todo-added="$ctrl.add($event.todo)"></add-todo-form>
      <a class="btn btn-default btn-block" ui-sref="todos">Back</a>
    </div>
  </div>
  `;
}
