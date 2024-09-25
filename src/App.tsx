
import './App.css'
import Sidebar from './components/Sidebar'
import SearchBar from "./components/SearchBar"
import Filter from "./components/Filter"
import Card from "./components/Card"


function App() {
 
  return (
    <>
    
    <Sidebar />

    <div>

    <header>

    <SearchBar />


    </header>

    <section>
      <Filter />
    </section>

    <section>

    <Card/>

    </section>
    

    </div>

    </>
  )
}

export default App
