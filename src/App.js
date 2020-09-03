import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'



class App extends Component {
  constructor(){
    super();
    this.state ={
      links: [
        {site: "https://www.instagram.com/steelodoe/", siteName: "Instagram", class: "fab fa-instagram"},
        {site: "https://twitter.com/SteeloBoaaa", siteName: "Twitter", class: "fab fa-twitter"}
      ]
    }
  }



  render(){
    return (
      <React.Fragment>
        <Header/>
        <Footer links={this.state.links}/>
      </React.Fragment>
    )
 }



}

export default App;
