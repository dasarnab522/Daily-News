import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spnier from './Spnier';
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 9,
        category: "general"
    }
    static propsTyps={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page:1 
        }
    }
   async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=587ad71b02af4dc39713992b57d90c9c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
        articles: parseData.articles,
        loading: false,
    })
   }
   async componentDidMount(){
    this.updateNews();
    }
    prevClick=async()=>{
        this.setState({page:this.state.page - 1})
        this.updateNews()
    }
    nextClick= async()=>{
        this.setState({page:this.state.page + 1})
        this.updateNews();
    }
  render() {
    return (
        <div>
      <div className='container my-4 '>
        <h1 className='text-center text-success'><strong>Top Headlines- {this.props.category}</strong> </h1>
        {this.state.loading && <Spnier/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-3 bg-gray' key={element.url}>
                    <NewsItem title = {element.title?element.title.slice(0,45):""} 
                        desc = {element.description?element.description.slice(0,88):""}
                        imgUrl = {element.urlToImage}
                        newsUrl = {element.url}
                        name = {element.source.name}
                        date = {element.publishedAt}
                    />
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr; Prev</button>
        <button type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div>
      </div>
      </div>
    )
  }
}

export default News