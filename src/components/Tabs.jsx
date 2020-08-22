import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from './Card';

export default class Tabs extends Component
{
  constructor(props){
    super(props);
    this.state={
      movieCategory:"popular"
      }
  }
  changeMovieCategory=(selectedCategory)=> {
    this.setState({ movieCategory : selectedCategory })
  //   this.setState({movieCategory: selectedCategory}, function () {
  //     console.log(this.state.movieCategory);
  // });
  }
  render() {
    return (
      <div>
        <div className="shadow-sm bg-white">
          <ul className="container nav nav-pills mb-4 pt-1 justify-content-end " id="pills-tab" role="tablist">
          <li className="nav-item">
            <Link className="nav-link active mx-2"  onClick = {()=>this.changeMovieCategory("popular")}  id="pills-popular-tab"  data-toggle="pill" to="/pills-popular" role="tab" aria-controls="pills-popular" aria-selected="true" >Popular</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" onClick = {()=>this.changeMovieCategory("top_rated")} id="pills-topRated-tab" data-toggle="pill" href="/pills-topRated" role="tab" aria-controls="pills-topRated" aria-selected="false">Top Rated</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick = {()=>this.changeMovieCategory("upcoming")} id="pills-upcoming-tab" data-toggle="pill" href="/pills-upcoming" role="tab" aria-controls="pills-upcoming" aria-selected="false">Upcoming</Link>
          </li>
        </ul> </div>
        <div className="clearfix"></div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
            <Card movieCategory={this.state.movieCategory} />
          </div>
        </div>
      </div>
    )
  }
}

