import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { 
    return (
      <section>
        <input className="song-Name"
          type="text"
          id="songName"
          name="songName"
        /> 
        <input className="artist-name"
          type="text"
          id="artistName"
          name="artistName"
          placeholder="name"
        />
        <input className="link"
          type="text"
          id="link"
          name="link"
          placeholder="link"
        />
        <button type="submit">Add Song</button>
      </section>
    )
  
  }
}

export default Form;