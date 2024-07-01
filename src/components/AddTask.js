const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTask);
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      e.target.task.value = '';
    }
  };
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          value={task.name}
          type='text'
          name='task'
          autoComplete='off'
          placeholder='Add Task'
          maxLength='27'
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type='submit'>Add</button>
      </form>
    </section>
  );
};

export default AddTask;
