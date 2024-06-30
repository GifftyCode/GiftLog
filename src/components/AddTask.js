const AddTask = () => {
  return (
    <section className='addTask'>
      <form>
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
