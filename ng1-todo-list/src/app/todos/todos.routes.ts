import { AddTodoContainer } from './containers/add-todo/add-todo.container';
import { TodosContainer } from './containers/todos/todos.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('add-todo', {
      parent: 'app',
      url: '/todo/add',
      component: AddTodoContainer.selector
    })

    .state('todos', {
      parent: 'app',
      url: '/todo',
      component: TodosContainer.selector
    });
};
