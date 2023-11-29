import React from 'react'
import { useState, useEffect } from 'react';
import Form from '../components/Form';
import NewsDisplay from '../components/NewsDisplay';

function News() {
  const [news, setNews] = useState(null);
  
  // Function getNews
  const getNews = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = 'https://api.nytimes.com/svc/search/v2/';
    const endPoint = 'articlesearch.json';
    const apikey = 'T25S6Mv2pADGOwnDiXcOWTZwWiZiHijX'
    const url = baseUrl  + endPoint + '?q=' + searchTerm + '&' + 'api-key=' + apikey;
    // make fetch request and store response
    console.log(url);
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setNews(data);
    } catch (e) {
      console.error(e);
    }
  }

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      
      getNews();
    }, []);
  


  return (
    <div>
      <h3>This is News page</h3>
      
      <Form newssearch= {getNews} />
      <NewsDisplay news={news}/>
      

      </div>
    
  )
}

export default News