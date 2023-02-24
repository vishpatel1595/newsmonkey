import React, { Component } from 'react'
import Newsitem from './NewsItem'

class News extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex flex-wrap my-3">
        <h2>Newmonkey - Top Headlines</h2>
        <div className="row w-100">
            <div className="p-2 mb-1"><Newsitem/></div>
        </div>   
        </div> 
      </div>
    )
  }
}

export default News
