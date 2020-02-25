// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { AddTodoForm } from './components/add-todo-form/add-todo-form.component';
import { TodoList } from './components/todo-list/todo-list.component';

/**
 * Import Module Containers
 */
import { TodosContainer } from './containers/todos/todos.container';
import { AddTodoContainer } from './containers/add-todo/add-todo.container';

/**
 * Import Module Services
 */
import { TodosService } from './services/todos.service';

/**
 * Import Module Routing
 */
import { routing } from './todos.routes';

export const moduleName =
  angular.module('application.todos', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(AddTodoForm.selector, AddTodoForm)
  .component(TodoList.selector, TodoList)

  /**
   * Register Module Containers
   */
  .component(TodosContainer.selector, TodosContainer)
  .component(AddTodoContainer.selector, AddTodoContainer)

  /**
   * Register Module Services
   */
  .service(TodosService.selector, TodosService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
