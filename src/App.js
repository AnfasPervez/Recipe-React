import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Recipes from './components/recipes';
import Axios from 'axios';


function App() {

  const [search,setSearch]=useState("chicken");
  const [recipes,setRecipes]=useState([]);

  const APP_ID="9736d5cc";
  const APP_KEY="8941caac7e5b2cab4e57dc2ac2cd4012";
 
 const getRecipes= async ()=>{
    const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    setRecipes(res.data.hits);
  }
  useEffect(()=>{
     getRecipes();
   }, []);

  

  const onInputChange= e =>{
    setSearch(e.target.value);
  }

  const onSearchClick=()=>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search}  onSearchClick={onSearchClick} onInputChange={onInputChange}/>
      <div className="container">
        <Recipes recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
