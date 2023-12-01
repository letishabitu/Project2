import React from 'react'

function NewsDisplay({ news }) {


  const loaded = () => {
      return (
          <>
             
              <h2>{news.copyright}</h2>
              {news.response.docs.map((doc) => {
            const {abstract, web_url} = doc;
             return(
                <>
                <h3>{abstract}</h3>
                <h3>{web_url}</h3> 
                <a href={web_url}> click link here</a>
                </>
                
            )
        })}
              
              
            
          </>
      )
  }

  const loading = () => {
      return <h1>No News to Display</h1>
  }
 
  return news ? loaded() : loading();
}
export default NewsDisplay;