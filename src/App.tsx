
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
  const [data, setData] = useState<string>("");
  

  useEffect(() =>{

  
    async function fetchData() {
      if (data) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${data}`
          );
          const result = await response.json();

          setMeals(result.meals || []); // Set meals or empty array if none
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }

 
      fetchData();
   
  }, [data]);

  const onSubmit = (newData: string) => {
    setData(newData); // Update the filter value
  };

 
  return (
    <>

    <Sidebar />

    <div>

    <header>
    <SearchBar />
    </header>

    <section className="filter">
      <Filter  callback = {onSubmit}/>
    
    </section>

    <section className='cards'>

    {meals.length > 0 ? (
            meals.map((meal: Meal) => (
              <Card key={meal.strMeal} name={meal.strMeal} img={meal.strMealThumb} />
            ))
          ) : (
            <p>No meals found. Try another filter.</p>
          )}
      
    
    </section>
      

    </div>

    </>
  )
}

export default App
