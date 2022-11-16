import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import Jokes from './component/Jokes'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-dark">
        <Router>
          <NavBar/>
          <Jokes/>
        <Routes>
          <Route exact path="/" element={<News key='science' country={'in'} category="science" pageSize={48}/>}></Route>
          <Route exact path="/business" element={<News key='business' country={'in'} category="business"  pageSize={48}/>}></Route>
          <Route exact path="/entertainment" element={<News key='entertainment' country={'in'} category="entertainment"  pageSize={48}/>}></Route>
          <Route exact path="/general" element={<News key='general' country={'in'} category="general"  pageSize={48}/>}></Route>
          <Route exact path="/health" element={<News key='health' country={'in'} category="health"  pageSize={48}/>}></Route>
          <Route exact path="/science" element={<News key='science' country={'in'} category="science"  pageSize={48}/>}></Route>
          <Route exact path="/sports" element={<News key='sports' country={'in'} category="sports"  pageSize={48}/>}></Route>
          <Route exact path="/technology" element={<News key='technology' country={'in'} category="technology"  pageSize={48}/>}></Route>
        </Routes>
      </Router>
      </div>
    )
  }
}
