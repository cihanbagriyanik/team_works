// import Picture from "./components/Picture"
import Homepage from "./pages/Homepage"

import data from "./helper/data"

const App = () => {

  return (
    <div>

      <Homepage data={data} />
      {/* <Picture data={data} /> */}

    </div>
  )
}


export default App
