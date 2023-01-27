// News Summary Challenge

// Import all necessary modules
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useState, useEffect } from 'react';

function App() {

  // Define the states
  const [news, setNews] = useState([]);

  // Use the key from the Guardian API
  const key = '5dcb8587-57ad-44bf-af4c-364845386b95';
  const URL = `https://content.guardianapis.com/search?q=news&api-key=${key}&page-size=30&show-fields=thumbnail&show-blocks=all`;

  // Create async function to fetch news from Guardian Website
  const guardianNews = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setNews(data.response.results);
    } catch (e) {
      alert(`Error data could not be loaded`);
    };
  };

  useEffect(() => {
    guardianNews();
  }, []);


  return (
    <div className="headline">
      <Header />
      <div>
        <div className="grid">
          {news.map((article) => {
            const articleUrl = article.webUrl
            return (

              // Display all the news information on the page
              <div className="article">
                <img src={article.fields.thumbnail} alt='thumbnail' />
                <h2>{article.webTitle}</h2>
                <a class='url' href={articleUrl.toString()}>Full Article Here</a>
              </div>
            );
          })};
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
