import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ItodoFi, ItodoResp } from '../models/todo-five';
import { ItodoRes } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoFiveService {

  todosArrys:Array<ItodoFi> = [
    {
      todoId:'1',
      todoItem: "java"
  
    },
    {
      todoId:' 2',
          todoItem: "c++"
  
    },
    {
      todoId: '3',
      todoItem: "python"
  
    }

  ];
  editTodoSub$:Subject<ItodoFi>=new Subject<ItodoFi>()
  
  

  constructor( ) {}
   fetchTodo():Observable<ItodoFi[]>{
        return of(this.todosArrys)

}
addTodos(todo:ItodoFi):Observable<ItodoRes>{
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
    
     UpdateTodo(UpdateTodo:ItodoFi):Observable<ItodoResp>{
          let GET_INDEX=this.todosArrys.findIndex(t=>t.todoId===UpdateTodo.todoId)
          this.todosArrys[GET_INDEX]=UpdateTodo
    
          return of({
            msg:`The TodoItem is ${UpdateTodo.todoItem} is updated successfully !!!`,
            data:UpdateTodo
          })
        }
    
      }
    
    
    
    
    
    
    





