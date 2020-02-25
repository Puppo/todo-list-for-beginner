/**
 * Import the Component styles
 */
import './todo-list.component.scss';
import { ITodo } from '../../models/todo.model';

class TodoListController {
  todos: ITodo[];
  todoRemoved: ($event: { $event: { id: number }}) => void;

  remove(todo: { id: number }) {
    this.todoRemoved({
      $event: {
          id: todo.id
      }
    });
  }
}

export class TodoList implements angular.IComponentOptions {
  static selector = 'todoList';
  static bindings = {
    todos: '<',
    todoRemoved: '&'
  };
  static controller = TodoListController;
  static template = `
  <div class="todo-list" ng-repeat="todo in $ctrl.todos" window-events>
    <span>{{ todo.description }}</span>
    <span ng-if="todo.dueDate">{{ todo.dueDate | dateFormat }}</span>
    <a href="" ng-click="$ctrl.remove(todo)">
      <i class="pull-right glyphicon glyphicon-remove"></i>
    </a>
  </div>
  `;
}
