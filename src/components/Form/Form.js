import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artistName: '',
      link: '',
      id: '',
      error: ''
    }
  }

  changeHandler = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value});

  }

  render() { 
    return (
      <section>
        <input className="song-Name"
          type="text"
          id="songName"
          name="songName"
          placeholder="song name"
          onChange={this.changeHandler}
          value={this.state.songName}
        /> 
        <input className="artist-name"
          type="text"
          id="artistName"
          name="artistName"
          placeholder="artist name"
          onChange={this.changeHandler}
          value={this.state.artistName}
        />
        <input className="link"
          type="text"
          id="link"
          name="link"
          placeholder="link"
          onChange={this.changeHandler}
          value={this.state.link}
        />
        <button className="button" type="submit"
          >Add Song</button>
      </section>
    )
  
  }
}

export default Form;