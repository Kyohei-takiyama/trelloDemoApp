import React from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "../tasks/button/AddTaskCardButton";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) => {
    const startIndex = result.source.index;
    const ednIndex = result.destination.index;
    const remove = taskCardsList.splice(startIndex, 1);
    taskCardsList.splice(ednIndex, 0, remove[0]);
    setTaskCardsList(taskCardsList);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardsList.map((taskCard , index) => (
              <TaskCard
                key={taskCard.id}
                taskCard={taskCard}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                index={index}
              ></TaskCard>
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            ></AddTaskCardButton>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
