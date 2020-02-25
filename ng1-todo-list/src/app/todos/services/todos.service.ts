import { ITodo } from '../models/todo.model';

export interface IAddTodoParam {
  description: string;
  dueDate: number;
}

export class TodosService {
  static selector = 'todosService';
  todos: ITodo[] = [
    { id: 1, description: 'Angular Js', dueDate: Date.now() }
  ];

  constructor(
      private $q: angular.IQService
  ) {
    'ngInject';
  }

  getAll() {
    return this.$q.resolve(this.todos);
  }

  add(todo: IAddTodoParam) {
    const highestId = this.todos
      .map(c => c.id)
      .reduce((a, b) => Math.max(a, b), 1);

    this.todos.push({
      id: highestId + 1,
      description: todo.description,
      dueDate: todo.dueDate
    });
  }

  remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
