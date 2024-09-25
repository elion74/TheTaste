
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

    <section className="filter">
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
    </section>

    <section className='cards'>

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

    </section>
    

    </div>

    </>
  )
}

export default App
