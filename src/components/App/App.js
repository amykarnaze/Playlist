import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import Songs from '../Songs/Songs';
import Form from '../Form/Form';
import { fetchSongs } from '../../Api.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount = async () => {
    await fetchSongs()
    .then(data => {this.setState({songQueue: data})})
    .catch(error => alert(error.message))
  }

  addSong = (song) => {
    this.setState({songQueue: this.state.songQueue.concat(song)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <Songs songQueue={this.state.songQueue} />
        <Form addSong={this.addSong}/>
        <div className="App-background">
          <main>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
