//The main section and most important that gives the Spotify its retrieval artwork feature. Firstly imports are declared to what other atrributes may come in, css, json, javascript etc
// This was helped and aided with https://github.com/JMPerez/spotify-web-api-js
import React, { Component } from 'react';
import PostList from './posts/PostList';
import Information from './posts/Information';
import './App.css';
import Spotify from 'spotify-web-api-js';

//This is then declared as constant, essentially a online database availible for creative commons use with Spotify API.
const spotifyWebApi = new Spotify();

//A class called App is declared which then extends to Component, a feature belonging to React. This is a constructor to set all settings to zero before anything else comes in to be called.
class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: { 
	  name: 'Not Checked', 
	  albumArt: '' 
	  }
    }
	//Sets access tokens for Spotify API access, unlike constantly calling for tokens all the time with Oauth, this allows tokens to be constantly updated without the need for subsituting over and over again.
	if (params.access_token){
	  spotifyWebApi.setAccessToken(params.access_token)
	}
  }
  
  
  //Retrieved from the index file of Spotify Authorization.
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  //Gets the current playback state of Spotify. Getters set which fetches back information.
  getNowPlaying(){
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name,
              albumArt: response.item.album.images[0].url
            }
		})
      })
	}
  
  //Renders and returns the display of Spotify to the user on the page.
  render() {
    return (
      <div className="App">
      <PostList />
      <Information />
        <a href='http://port-8888.SpotifyWebApi-matthewlukebyrne611317.codeanyapp.com'> 
		<button>Return to Login Page</button>
        </a>
         <div class = "playingfont"> Now Playing: { this.state.nowPlaying.name } </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ width: 500 }}/>
        </div>
         <button onClick={() => this.getNowPlaying()}>
            Press to see who is currently playing on your Spotify!
         </button>
		</div>
    );
  }
}


//Export
export default App;