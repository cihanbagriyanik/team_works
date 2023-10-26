
import Header from "./components/Header/Header"
import LessonCard from "./components/LessonCard/LessonCard"

import data from "./helper/data"

const App = () => {

  return (

    <div>
      <Header />
      {/* <LessonCard data={data}/> */}


      <div className="container1">
        <p className="today">6 lessons today</p>
        <div className="lesson ">
          {data.map((item) => <LessonCard {...item} key={item.id} />)}
        </div>
        <div className="btn">
          <button>Clear List</button>
        </div>
      </div>



    </div>

  )
}

export default App