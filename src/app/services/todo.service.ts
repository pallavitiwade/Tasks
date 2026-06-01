import { Injectable } from '@angular/core';
import { ItodoRes, Itodos } from '../models/todo';
import { Observable , of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
 todosArr:Array<Itodos> = [
  {
    todoId:'1',
    todoItem: "learn agile"
  },
  {
    todoId:' 2',
    todoItem: "learn node-js"
  },
  {
    todoId: '3',
    todoItem: "scss"
  },
  {
    todoId: '4',
    todoItem: "mongodb"
  }
    
];


editTodoSub$:Subject<Itodos>=new Subject<Itodos>()
  constructor() {}

    fetchTodos():Observable<Itodos[]>{
      return of(this.todosArr)

    }

    addTodo(todo:Itodos):Observable<ItodoRes>{
      this.todosArr.push(todo)
      let res={
        msg:`new todo Item ${todo.todoItem} creted succesfully!!!`,
        data:todo
      }
      return of(res)
    }

    removeTodo(id:string):Observable<ItodoRes>{
      let GET_INDEX=this.todosArr.findIndex(t=>t.todoId===id)
      let removeTodo=this.todosArr.splice(GET_INDEX, 1)

      return of({
        msg:`New Todo Item with Id ${removeTodo[0].todoItem} removed successfully !!!`,
        data:removeTodo[0]
      })
    }

    UpdateTodo(UpdateTodo:Itodos):Observable<ItodoRes>{
      let GET_INDEX=this.todosArr.findIndex(t=>t.todoId===UpdateTodo.todoId)
      this.todosArr[GET_INDEX]=UpdateTodo

      return of({
        msg:`The TodoItem is ${UpdateTodo.todoItem} is updated successfully !!!`,
        data:UpdateTodo
      })
    }



  }

  

