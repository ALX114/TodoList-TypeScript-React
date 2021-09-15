import { makeAutoObservable, observable, action, computed, observe } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import ReactDOM  from "react-dom";
import taskForm from './component/taskForm';


interface ITodo{
    taskName:string,
    taskText:string,
    complete?:boolean,
    id?:number,
    sec?:string
}

export class Todo {
    @observable
    private _renderCompleteTask:boolean 

    @observable
    private todo: ITodo[] = []
    
    

    constructor(){
        makeAutoObservable(this)
    }


    public newTodo(name:string, text:string, complete?:boolean,id?:number){
        
        

        if(!id ){
            
            id = this.todo.length
            
            console.log(id)
        }
        
        if(!complete){
            complete = false
        }
        
        const item: ITodo = {
        taskName : name,
        taskText : text,
        complete : complete,
        id : id,
        }
        
        this.todo[id] = item
    
    }
    public deleteTodoFilter(id:number){
        console.log( this.todo.filter((item)=>item.id !== id? true:false))
         this.todo = this.todo.filter((item)=> item.id !== id? true:false)

     
        }
     public deleteTodoSplice(id:number){
        this.todo.splice(id,1)
    } 
     get todos(){
         return this.todo
     }
     public task(id:number){
         return this.todo[id]
     }
     @observable
     public completeTask(id:number){
        this.todo[id].complete = !this.todo[id].complete
     }

     public renderCompleteTask(){
       this._renderCompleteTask=!this._renderCompleteTask
     }
}


