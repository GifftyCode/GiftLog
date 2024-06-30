const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    setTaskList([...taskList, newTask]);
    e.target.task.value = '';
  };
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          autoComplete='off'
          placeholder='Add Task'
          maxLength='27'
        />
        <button type='submit'>Add</button>
      </form>
    </section>
  );
};

export default AddTask;
