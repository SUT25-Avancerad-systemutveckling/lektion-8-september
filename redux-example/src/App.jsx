import './App.css'
import { increment } from './reducers/counterReducer.js'
import { useDispatch } from 'react-redux'

import ViewCounter from './components/ViewCounter.jsx'

/**
 * Store - Håller vårt state
 * Reducer - Funktionerna som uppdaterar vårt state
 * Action - Som säger vilken funktion vi ska använda för att uppdatera state
 * Dispatch - Som triggar en action och uppdatering av state från en komponent
 */

function App() {
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Räknare</h1>
      <ViewCounter />
      <button className="counter" onClick={() => dispatch(increment(1))}>
        Öka med 1
      </button>
    </main>     
  )
}

export default App
