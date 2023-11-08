

import "../List_Item/ListItem.css"

import "bootstrap-icons/font/bootstrap-icons.css";

const ListItem = ({ text, deleteTodo, isChecked, toggleChecked }) => {

  return (

    <div className='list'>

      <div className={`${isChecked ? "todo_radio" : "todo_radio_unchecked"} `} onClick={toggleChecked}>
        {isChecked && <i class="bi bi-check-lg"></i>}
      </div>

      <div className={`${isChecked ? "todo_text_checked" : "todo_text"}`}>
        {text}
      </div>

      <div className="todo_delete" onClick={deleteTodo}>
        <i class="bi bi-trash"></i>
      </div>


    </div>
  )
}

export default ListItem