function TaskList({tasks}) {


  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <div>
      {tasks.map((task, i) => (
        <div key={i}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
