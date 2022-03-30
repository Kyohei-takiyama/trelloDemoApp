import React from "react";
import { v4 as uuid } from 'uuid';

const TaskAddInput = ({inputText, taskList, setInputText, setTaskList}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    if (inputText === "") {
      return;
    }
    // カード追加
    setTaskList([
      ...taskList,
      {
        draggableId: `task-${taskList.length}`,
        text: inputText,
        id,
      }
    ])
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
