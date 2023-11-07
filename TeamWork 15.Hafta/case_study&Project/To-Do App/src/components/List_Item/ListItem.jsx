
import "../List_Item/ListItem.css"

import "bootstrap-icons/font/bootstrap-icons.css";

const ListItem = () => {
  return (

    <div className='list'>

      <div className="todo_radio">
        <i class="bi bi-check-lg"></i>
      </div>

      <div className="todo_text">
        Testing Text
      </div>

      <div>
        <i class="bi bi-trash"></i>
      </div>


    </div>
  )
}

export default ListItem