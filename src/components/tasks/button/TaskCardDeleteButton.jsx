import React from 'react'

const TaskCardDeleteButton = ({taskCard,taskCardsList,setTaskCardsList}) => {

  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter(e => e.id !== id));
  }
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)} ><i className="fa-solid fa-circle-xmark"></i></button>
    </div>
  )
}

export default TaskCardDeleteButton
