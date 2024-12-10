export const Task = (props) => {
  return
 ( <div>
    <h2>{props.taskName}</h2>
    <button>Complete</button>
    <button onClick={()=>props.deleteTask(props.id)}>X</button>
  </div>)
};
