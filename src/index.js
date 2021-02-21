import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


/* const tarea = new Todo('Aprender javascript');*/
export const todoList = new TodoList();

//console.log(todoList.todos);

todoList.todos.forEach(crearTodoHtml);
todoList.todos[0].imprimirClasses();
