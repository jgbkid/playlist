import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = 'teal';
let defaultStyle = {
  color: textColor
};

let fakeServerData = {
   user: {
     name: 'Justin',
     playlists: [
       {
         name: 'My Favorites',
         songs:[
           {name:'Bagbak', duration: 1345},
           {name: 'Remember Me', duration: 2345}, 
           {name:'Filthy', duration: 1432}
          ]

       },
       {
         name: 'My Favorites Vol. 2',
         songs:[
          {name:'Bagbak', duration: 1345},
          {name: 'Remember Me', duration: 2345}, 
          {name:'Filthy', duration: 1432}
         ]
       },
       {
         name: 'My Favorites Vol. 3',
         songs:[
          {name:'Bagbak', duration: 1345},
          {name: 'Remember Me', duration: 2345}, 
          {name:'Filthy', duration: 1432}
         ]
       },
       {
         name: 'My Favorites Vol. 4',
         songs:[
          {name:'Bagbak', duration: 1345},
          {name: 'Remember Me', duration: 2345}, 
          {name:'Bad Romance', duration: 1432}
         ]
       },
     ]
   }
}



class PlaylistCounter extends Component {
  render() {
    let color = 'red'
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block', background: 'black', margin:'5px'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let color = 'red'
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block', background: 'black', margin:'5px'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    let color = 'red'
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    let color = 'red'
    return (
      <div style={{...defaultStyle, width:'22%', background:'#fafafa', display:'inline-block', margin: '10px'}}>
{/*using spread operator ...defaultStyle*/}
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>
          <li>{song.name}</li>
          )}
          
        </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {serverData:{}}
  }
  componentDidMount() {
    setTimeout(() =>{
    this.setState({serverData: fakeServerData})
  }, 1000);
  }

  render() {
   
    return (
      <div className="App">
    {/*if the user has a name, then show ...*/}
      {this.state.serverData.user ?
      <div>
        <h1>
          {this.state.serverData.user.name}&#39;s Playlists Pro
        </h1>
        <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HoursCounter playlists={this.state.serverData.user.playlists}/>
         <Filter/>
         {this.state.serverData.user.playlists.map(playlist => 
         <Playlist playlist ={playlist}/> 
          )}
         
      </div> : <h1 style={defaultStyle}>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
