
import './App.css'
import Sidebar from './components/Sidebar'
import SearchBar from "./components/SearchBar"
import Filter from "./components/Filter"
import Card from "./components/Card"
import { useEffect, useState} from 'react'


interface Meal {
  strMeal:string, 
  strMealThumb:string
}

function App() {


  const [meals, setMeals] = useState([]);

  useEffect(() =>{


      async function fetchData() {
        // You can await here
          
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");


        const data  =  await response.json();
        //console.log(data)

        setMeals(data.meals);

        // ...m
      }
 
      fetchData();
   
  }, []);

 
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

      

        
      {meals.map((meal: Meal) => (
        <Card key={meal.strMeal} name={meal.strMeal} img={meal.strMealThumb} />
      ))}
       
      
    
    </section>
      

    </div>

    </>
  )
}

export default App
