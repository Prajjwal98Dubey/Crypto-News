import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard';
import moon from './Images/moon.png';
import sun from './Images/sun.png';

function App() {
  const[count,setCount]=useState(0);
  const[news,setNews]=useState([]);
  const[isloading,setIsLoading]=useState(true)

  const handleTheme=()=>{
    setCount(count+1);
    if(count%2===0){
      document.getElementById('theme-img').src=sun;
      document.body.style.backgroundColor="black";

    }
    if(count%2!==0){
      document.getElementById('theme-img').src=moon;
      document.body.style.backgroundColor="white";
    }

  }
  const call_API=()=>{
  const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': 'db8c939ae4msh9c79f95158affd8p12aac1jsn22c44837d4b4',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  setNews(response.data);
  setIsLoading(false)
  
}).catch(function (error) {
	console.error(error);
});
  }
useEffect(()=>{
    call_API();
 },[])
  return (
    <>
    <div>
    <img onClick={handleTheme} className="theme-color" id="theme-img" src={moon} alt="loading..." />
    </div>
{isloading ? <h1 className='loading'>Loading...</h1>: (<div className="main">
      <div className="grid">
         {news.map((n,index)=>(
          <NewsCard key={index} n={n}/>
         ))}

      </div>
     </div>)  }
     
    </>
  );
}

export default App;
