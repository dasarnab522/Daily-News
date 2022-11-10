import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,imgUrl,newsUrl,name,date}=this.props;
    return (
      <div className='my-3 p-3 mb-2 bg-info'>
        <div className="card"/>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title"><strong>{title}</strong></h5>
            <p className="card-text">{desc}</p>
            <p className='card-text'><small className='text-muted'>{name} on {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
            <a href={newsUrl} rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
    )
  }
}

export default NewsItem