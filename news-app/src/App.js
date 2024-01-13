// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";
function App() {
  let [articles, setArticles] = useState([]);

  let [category, setCategory] = useState("top-headlines")

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/${category}/category/sports/in.json`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="App">
      <header className="header">
        <h1>NewsStaion</h1>
        <input type="text" onChange={(event)=>{
          if (event.target.value!=="") {
            setCategory(event.target.value)
          }
          else{
            setCategory("top-headlines")
          }
        }} placeholder="Search News"
       />
      </header>
      <section className="News-Articles">
        {
          articles.length!==0?
          articles.map((article, key) => {
          return <News article={article} />;
        })
        :
         <h3>No Data Faount Tht You Have Searched</h3>
        
      }
      </section>
    </div>
  );
}

export default App;
