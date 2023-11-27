import React from 'react'
import { useState, useEffect } from 'react';
import Form from '../components/Form';

function News() {
  const [news, setNews] = useState(null);
  
  // Function getNews
  const getNews = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = 'https://newsapi.org';
    const endPoint = '/v2/top-headlines';
    const apikey = 'e4ed38c384da48589ce96e8354663e1b'
    const url = baseUrl  + endPoint + '?' + searchTerm + '&' + 'apikey=' + apikey;
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
      {/* <NassaDisplay nassa={nassa}/> */}
      

      </div>
    
  )
}

export default News