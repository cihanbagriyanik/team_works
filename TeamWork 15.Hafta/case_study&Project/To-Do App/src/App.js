import Header from "./components/Header"
import TodoList from "./components/TodoList"

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <div className="app text-center  ">

      <Header />

      <TodoList />

    </div>
  )
}


export default App
