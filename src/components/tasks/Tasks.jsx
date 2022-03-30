import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// taskList , 要素 = {text: inputText};

const Tasks = ({ taskList, setTaskList }) => {

  const handleDragEnd = (result) => {
    // taskを並び替え
    const startIndex = result.source.index;
    const ednIndex = result.destination.index;
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(ednIndex, 0, remove[0]);
    setTaskList(taskList);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task , index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  ></Task>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
