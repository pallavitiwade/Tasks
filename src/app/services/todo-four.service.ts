import { Injectable } from '@angular/core';
import { ItodoF, ItodoResp } from '../models/todo-four';
import { ItodoRes } from '../models/todo';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoFourService {

todosArrys:Array<ItodoF> = [
  {
    todoId:'1',
    todoItem: "cloud"

  },
  {
    todoId:' 2',
        todoItem: "kubernetes"

  },
  {
    todoId: '3',
    todoItem: "azure"

  },
{
    todoId: '5',
    todoItem: "aws"
  }
];
editTodoSub$:Subject<ItodoF>=new Subject<ItodoF>()



  constructor() { }
  fetchTodo():Observable<ItodoF[]>{
      return of(this.todosArrys)
    }


     addTodos(todo:ItodoF):Observable<ItodoRes>{
        this.todosArrys.push(todo)
        let res={
          msg:`New Todo Item ${todo.todoItem} created successfully!!!`,
          data:todo
        }
        return of(res)
      }
      
        removeTodos(id:string):Observable<ItodoResp>{
          let GET_INDEX=this.todosArrys.findIndex(t=>t.todoId===id)
          let removeTodos=this.todosArrys.splice(GET_INDEX, 1)
    
          return of({
            msg:`New Todo Item with Id ${removeTodos[0].todoItem} removed successfully !!!`,
            data:removeTodos[0]
          })
        }
    
     UpdateTodo(UpdateTodo:ItodoF):Observable<ItodoResp>{
          let GET_INDEX=this.todosArrys.findIndex(t=>t.todoId===UpdateTodo.todoId)
          this.todosArrys[GET_INDEX]=UpdateTodo
    
          return of({
            msg:`The TodoItem is ${UpdateTodo.todoItem} is updated successfully !!!`,
            data:UpdateTodo
          })
        }
    
    
    
    
    
    
    
    
    





}
