import { useState } from 'react'
import data from './data'
import List from './List'
// import { useState } from 'react';
const App = () => {
  const [people, setPeople] = useState(data)

  const handleClear = () => {
    setPeople([])
    // console.log(200)
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={handleClear}>
          clear all
        </button>
      </section>
    </main>
  )
}

export default App
