import { IAddTodoParamUi } from '../../containers/add-todo/add-todo.container';

class AddTodoFormController {
  description: string;
  dueDate: Date;
  todoAdded: ($event: { $event: { todo: IAddTodoParamUi}}) => void;

  submit() {
    const description = this.description;
    const dueDate = this.dueDate ? this.dueDate.getTime() : null;
    this.todoAdded({
      $event: {
        todo: { description, dueDate }
      }
    });
    this.description = '';
    this.dueDate = null;
  }
}

export class AddTodoForm implements angular.IComponentOptions {
  static selector = 'addTodoForm';

  static template = require('./add-todo-form.component.html');
  static bindings = {
    todoAdded: '&'
  };
  static controller = AddTodoFormController;
}
