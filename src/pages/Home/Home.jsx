import { useState, useEffect } from 'react'; 
import Banner from '../../components/Banner/Banner';
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
// import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
// import AppDownload from "../../components/AppDownload/AppDownload";



const Home = () => {
  const defaultSelection = () => {
    const selectedDish = localStorage.getItem("category");
    return selectedDish ? JSON.parse(selectedDish) : "All";
  } 
  const [category, setCategory] = useState(defaultSelection);
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);
  return (
    <div>
        <Banner/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  )
}

export default Home
