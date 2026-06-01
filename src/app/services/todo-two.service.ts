import { Injectable } from '@angular/core';
import { Itodo, ItodoResp } from '../models/todo-two';
import { Observable, of, Subject } from 'rxjs';
import { ItodoRes, Itodos } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoTwoService {
  removeTodo(id: string) {
    throw new Error('Method not implemented.');
  }
todosArry:Array<Itodo> = [
  {
    todoId:'1',
    todoItem: "agile"

  },
  {
    todoId:' 2',
        todoItem: "node-js"

  },
  {
    todoId: '3',
    todoItem: "scss"

  },
{
    todoId: '5',
    todoItem: "Git"
  }
];
editTodoSub$:Subject<Itodos>=new Subject<Itodos>()


  constructor() { }

  fetchTodo():Observable<Itodo[]>{
    return of(this.todosArry)
  }

  addTodos(todo:Itodos):Observable<ItodoRes>{
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

 UpdateTodo(UpdateTodo:Itodos):Observable<ItodoResp>{
      let GET_INDEX=this.todosArry.findIndex(t=>t.todoId===UpdateTodo.todoId)
      this.todosArry[GET_INDEX]=UpdateTodo

      return of({
        msg:`The TodoItem is ${UpdateTodo.todoItem} is updated successfully !!!`,
        data:UpdateTodo
      })
    }





}
