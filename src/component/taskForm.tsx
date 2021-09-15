import { observer } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function taskForm(item:any){
   return(
     <a key={`${item.id + item.taskName}`}>
          {item.id}
          {item.taskName}
          {/* <button onClick={()=>{task.deleteTodoSplice(item.id )}}>del Splice</button> */}
          <button onClick={()=>{task.deleteTodoFilter(item.id )}}>del Filter</button>
          
          <button onClick={()=>{task.completeTask(item.id )}}>{item.complete?<>uncomplete</>:<>complete</>}</button>
          <br/>
      </a>
   )
}