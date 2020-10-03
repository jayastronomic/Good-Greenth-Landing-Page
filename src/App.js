import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js'
import Player from './components/Player'



class App extends Component {
  constructor(){
    super();
    this.state ={
      links: [
        {site: "https://www.instagram.com/steelodoe/", siteName: "Instagram", class: "fab fa-instagram fa-icon"},
        {site: "https://twitter.com/SteeloBoaaa", siteName: "Twitter", class: "fab fa-twitter fa-icon"},
        {site: "https://music.apple.com/us/artist/steelo-doe/1485395657", siteName: "Apple Music", class: "fab fa-itunes-note fa-icon"},
        {site: "https://open.spotify.com/artist/1AuoBIgJYy19FtBBCfPVma?si=G-CNdzjESZqre7E9DYZacA", siteName: "Spotify", class: "fab fa-spotify fa-icon" },
        {site: "https://soundcloud.com/realspieldoe", siteName: "Souncloud",  class: "fab fa-soundcloud fa-icon" }
      ]
    }
  }



  render(){
    return (
      <div className=" bg-gray-200">
        <Header/>
        <Player />
        <Body/>
        <Footer links={this.state.links}/>
      </div>
    )
 }



}

export default App;
