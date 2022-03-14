import React from 'react'
import './News.css'

function News() {
    const news = [{
        title: 'Russia targets cities, talks continue',
        age: '2 Hours Ago',
        id: '1'
    },{
        title: 'How to get promoted at work',
        age: '3 Hours Ago',
        id: '2'
    }]
  return (
    <div className='news'>
        <h4 className="news__heading">
            LinkedIn News
        </h4>
        {
            news.map(({title, age}) => (
                <>
                <h6 className="news__headline">
                 {title}
                </h6>
                <p className="news__date">
                {age}
                </p>
                
                
                </>
            ))
        }
    </div>
  )
}

export default News