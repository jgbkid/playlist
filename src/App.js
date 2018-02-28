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
         name: 'Discover Weekly',
         songs:[
          {name:'Bagbak', duration: 1345},
          {name: 'Remember Me', duration: 2345}, 
          {name:'Filthy', duration: 1432}
         ]
       },
       {
         name: 'Another Best Playlist',
         songs:[
          {name:'Bagbak', duration: 1345},
          {name: 'Remember Me', duration: 2345}, 
          {name:'Filthy', duration: 1432}
         ]
       },
       {
         name: 'Playlist!',
         songs:[
          {name:'Weekly Riot', duration: 1345},
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
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}/>
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
    this.state = {
      serverData:{},
      filterString: ''
  
    }
  }
  componentDidMount() {
    setTimeout(() =>{
    this.setState({serverData: fakeServerData});
    }, 1000);
  }


  render() {
  let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
  .filter(playlist =>
    playlist.name.toLowerCase().includes(
      this.state.filterString.toLowerCase())
    ) : []
    return (
      <div className="App">
    {/*if the user has a name, then show ...*/}
      {this.state.serverData.user ?
      <div>
        <h1>
          {this.state.serverData.user.name}&#39;s Playlists Pro
        </h1>
        <PlaylistCounter playlists={playlistToRender}/>
        <HoursCounter playlists={playlistToRender}/>

         <Filter onTextChange={text => {
           console.log(text);
         this.setState({filterString:text})
        }}/>

         {playlistToRender.map(playlist => 
         <Playlist playlist ={playlist}/> 
          )}
         
      </div> : <h1 style={defaultStyle}>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
