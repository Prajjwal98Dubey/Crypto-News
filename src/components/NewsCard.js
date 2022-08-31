import React from 'react'

const NewsCard = ({n}) => {
    const arr=['red','blue','green','purple','lightblue','yellow','gold','voilet','greenyellow','aqua']
    const getcolor=()=>{
      let random=Math.floor(Math.random()*11);
      let randcolor=arr[random]
      return randcolor;
    }
    let ans=getcolor();
  return (
    <>
    <div id='news-card' className="card">
    <h4 className="title" style={{color:ans}}>&#9830;{n.title}</h4>
    <a href={n.url} target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Read More...</button></a>
  </div>
  </>
  )
}

export default NewsCard