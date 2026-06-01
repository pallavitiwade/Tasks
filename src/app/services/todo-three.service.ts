import { Injectable } from '@angular/core';
import { Itodo, ItodoResp } from '../models/todo-three';
import { Observable, of, Subject } from 'rxjs';
import { ItodoRes } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoThreeService {
todosArry:Array<Itodo> = [
  {
    todoId:'1',
    todoItem: "services"

  },
  {
    todoId:' 2',
        todoItem: "component"

  },
  {
    todoId: '3',
    todoItem: "directives"

  },
{
    todoId: '5',
    todoItem: "pipe"
  }
];

editTodoSub$:Subject<Itodo>=new Subject<Itodo>()

  constructor() { }
fetchTodo():Observable<Itodo[]>{
    return of(this.todosArry)
  }

  addTodos(todo:Itodo):Observable<ItodoRes>{
    this.todosArry.push(todo)
    let res={
      msg:`New Todo Item ${todo.todoItem} created successfully!!!`,
      data:todo
    }
    return of(res)
  }
  
    removeTodos(id:string):Observable<ItodoResp>{
      let GET_INDEX=this.todosArry.findIndex(t=>t.todoId===id)
      let removeTodos=this.todosArry.splice(GET_INDEX, 1)

      return of({
        msg:`New Todo Item with Id ${removeTodos[0].todoItem} removed successfully !!!`,
        data:removeTodos[0]
      })
    }

 UpdateTodo(UpdateTodo:Itodo):Observable<ItodoResp>{
      let GET_INDEX=this.todosArry.findIndex(t=>t.todoId===UpdateTodo.todoId)
      this.todosArry[GET_INDEX]=UpdateTodo

      return of({
        msg:`The TodoItem is ${UpdateTodo.todoItem} is updated successfully !!!`,
        data:UpdateTodo
      })
    }













}
