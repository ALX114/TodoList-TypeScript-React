import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable} from 'mobx'
import { observer } from 'mobx-react';
import {Todo} from './tasks'
import './index.scss'
import taskForm from './component/taskForm'



let task = new Todo

task.renderCompleteTask = false

const App:React.FC = observer(()=>{
  

  return (<>
    <h1><div>TodoList</div></h1>
    <form name="task">
    <div>
      <div className="input">
        <input type="text" name="taskName"/>
        <input type="text" name="taskText"/>
      
      <a type="btn" className="btnTask" onClick={()=>{
        let form = document.forms['task']
        
        let name = form.taskName.value 
        let text = form.taskText.value
        
        task.newTodo(name, text)
      }}>push</a></div>
      <br />
      <div className="btn">
        <button type="button" onClick={()=>{
          
          task.renderCompleteTask=!task.renderCompleteTask
          task.newTodo('a','a', false, -3)
          task.deleteTodoFilter(-3)
        }}> {task.renderCompleteTask?<>AllTask</>:<>UncompleteTask</>}</button>
        <button type="button" onClick={()=>{
          task.newTodo('a','a', false, -3)
          task.deleteTodoFilter(-3)
          
        }}> Refresh</button>
      </div>
      </div>
    </form>
    <span className="tasks">
     {
       
       task.renderCompleteTask?
       task.todos.map((item)=>{return(
         !item.complete
         ?
          <a key={`${item.id + item.taskName}`}>
          <a className="id">{item.id+1}</a>
          {item.taskName}
          {/* <button onClick={()=>{task.deleteTodoSplice(item.id )}}>del Splice</button> */}
          <button onClick={()=>{task.deleteTodoFilter(item.id )}}>del Filter</button>
          
          <button onClick={()=>{task.completeTask(item.id )}}>{item.complete?<>uncomplete</>:<>complete</>}</button>
          <br/>
             </a>
       :
       <></>)
       })
       :
    task.todos.map((item)=>{
     return(
     
     <a key={`${item.id + item.taskName}`}>
          <a className="id">{item.id+1}</a>
        <a>{item.taskName}</a>
        {item.complete?<>completed</>:<>not completed</>}
        {/* <button onClick={()=>{task.deleteTodoSplice(item.id )}}>del Splice</button> */}
        <button onClick={()=>{task.deleteTodoFilter(item.id )}}>del Filter</button>
        <button onClick={()=>{task.completeTask(item.id )}}>{item.complete?'uncomplete':'complete'}</button>
        <br/>
           </a>
           
           ) 
    })}</span>
  </>)

  task.todos.map(item=>{
    taskForm(item)
  })
})




ReactDOM.render(
  <App  />,
  document.getElementById("root")
);