//App.jsx

//Imports use state, TourFilter, DestinationSelector, and Styles.
import { useState } from "react"
import TourFilter from "./components/Gallery"
import DestinationSelector from "./components/DestinationSelector"
import "./styles/styles.css"

//Creating a function that allows the website to run.
function App() {
  const [tours, setTours] = useState([])
  const [selectedDestination, setSelectedDestination] = useState("")
  
  //Allows for a tour to be removed.
  const onRemove = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
  }

  //Filters the tours based on the selected destination.
  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination) : tours;

  
  //Calling upon destination selector and tour filter.
  return (
    <>
      <h1>Tour Picker</h1>
      <DestinationSelector
        tours={tours}
        onDestinationChange={setSelectedDestination}
        />
        <TourFilter tours={filteredTours} setTours={setTours} onRemove={onRemove} />
      </>
  )
}

//Exports App
export default App