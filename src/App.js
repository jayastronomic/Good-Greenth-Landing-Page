import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js'



class App extends Component {
  constructor(){
    super();
    this.state ={
      links: [
        {site: "https://www.instagram.com/steelodoe/", siteName: "Instagram", class: "fab fa-instagram"},
        {site: "https://twitter.com/SteeloBoaaa", siteName: "Twitter", class: "fab fa-twitter"},
        {site: "https://music.apple.com/us/artist/steelo-doe/1485395657", siteName: "Apple Music", class: "fab fa-itunes-note"},
        {site: "https://open.spotify.com/artist/1AuoBIgJYy19FtBBCfPVma?si=G-CNdzjESZqre7E9DYZacA", siteName: "Spotify", class: "fab fa-spotify" },
        {site: "https://soundcloud.com/realspieldoe", siteName: "Souncloud",  class: "fab fa-soundcloud" }
      ]
    }
  }



  render(){
    return (
      <React.Fragment>
        <Header/>
        <Body/>
        <Footer links={this.state.links}/>
      </React.Fragment>
    )
 }



}

export default App;
