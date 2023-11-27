import React from 'react'

function NewsDisplay({news}) {


  

  const loaded = () => {
      return (
          <div className="board">
             
             <h3>{news.totalResults} </h3>
             
             
          </div>
      )
  }

  const loading = () => {
      return <h1>No Data to Display</h1>
  }
  
  return news ? loaded() : loading();
}

export default NewsDisplay