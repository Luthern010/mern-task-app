import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa"

const Task = () => {
  return (
    <div className="task">
      <p>
        <b>1.</b>
        Task 1
      </p>
      <div className="task-icons">
      <FaEdit color="purple"/>
      <FaRegTrashAlt color="red"/>
      <FaCheckDouble color="green"/>
      </div>
    </div>
  )
}

export default Task;