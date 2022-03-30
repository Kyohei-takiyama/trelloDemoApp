import React from "react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

const TaskCard = ({ taskCard, taskCardsList, setTaskCardsList,index }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className="taskCard" ref={provided.innerRef} {...provided.draggableProps} >
          <div className="taskCardTitleAndTaskCardDeleteButtonArea" {...provided.dragHandleProps}>
            <TaskCardTitle></TaskCardTitle>
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            ></TaskCardDeleteButton>
          </div>
          <TaskAddInput
            inputText={inputText}
            taskList={taskList}
            setInputText={setInputText}
            setTaskList={setTaskList}
          ></TaskAddInput>
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
            index={index}
          ></Tasks>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
